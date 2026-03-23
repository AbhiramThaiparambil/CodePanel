import { IUser } from "../domin/IUser";
import { CreateUserDTO } from "../dto/CreateUserDTO";

export interface ICreateUserUseCase {
    execute(dto: CreateUserDTO): Promise<IUser>;
}
