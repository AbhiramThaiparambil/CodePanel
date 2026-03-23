import { IUser } from "./IUser";
import { CreateUserDTO } from "../dto/CreateUserDTO";

export interface IUserRepository {
    create(dto: CreateUserDTO): Promise<IUser>;

    delete(userId: string): Promise<boolean>;

    findById(userId: string): Promise<IUser | null>;

    findByEmail(email: string): Promise<IUser | null>;
}
