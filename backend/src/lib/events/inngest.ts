
import { ICreateUserUseCase } from "../../application/usecase/ICreateUserUseCase.js";
import { IDeleteUserUseCase } from "../../application/usecase/IDeleteUserUseCase.js";
import { inngest } from "../../infrastructure/config/inngest.js";
import { container } from "../../infrastructure/config/container.js";
import { TOKENS } from "../../constant/tokens.js";

export const createUserFunction = inngest.createFunction(
    { id: "create-user" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        console.log("Create user event:", event);
        const createUser = container.resolve<ICreateUserUseCase>(TOKENS.ICreateUserUseCase);

        const data = event.data as any;
        const { id, first_name, last_name, email_addresses, image_url } = data;

        const userName = `${first_name || ""} ${last_name || ""}`.trim() || "User";
        const email = email_addresses && email_addresses.length > 0 ? email_addresses[0].email_address : "";
        const profileImage = image_url || "";
        const clerkId = id;

        await createUser.execute({
            userName,
            email,
            password: "",
            clerkId,
            profileImage
        });
    }
);

export const deleteUserFunction = inngest.createFunction(
    { id: "delete-user" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        console.log("Delete user event:", event);

        const data = event.data as any;
        const { id } = data;
        const deleteUser = container.resolve<IDeleteUserUseCase>(TOKENS.IDeleteUserUseCase);

        await deleteUser.execute({ clerkId: id });
    }
);



export const functions = [createUserFunction, deleteUserFunction];