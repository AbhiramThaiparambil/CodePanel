import { AuthObject } from "@clerk/express";
import { IUser } from "../../application/domin/IUser.ts";

declare global {
    namespace Express {
        interface Request {
            auth(): AuthObject & { userId: string }
            user?: IUser
        }
    }
}