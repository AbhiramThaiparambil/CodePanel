import { IUser } from "./IUser.js";
import { CreateUserDTO } from "../dto/CreateUserDTO.js";

export interface IUserRepository {
    create(dto: CreateUserDTO): Promise<IUser>;

    delete(userId: string): Promise<boolean>;

    findById(userId: string): Promise<IUser | null>;

    findByEmail(email: string): Promise<IUser | null>;
    findByClerkId(clerkId: string): Promise<IUser | null>;

}
