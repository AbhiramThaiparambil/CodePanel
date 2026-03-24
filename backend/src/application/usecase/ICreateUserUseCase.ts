import { IUser } from "../domin/IUser.js";
import { CreateUserDTO } from "../dto/CreateUserDTO.js";

export interface ICreateUserUseCase {
    execute(dto: CreateUserDTO): Promise<IUser>;
}
