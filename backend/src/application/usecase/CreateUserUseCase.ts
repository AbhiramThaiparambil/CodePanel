import { IUser } from "../domin/IUser";
import { IUserRepository } from "../domin/IUserRepository";
import { CreateUserDTO } from "../dto/CreateUserDTO";
import { ICreateUserUseCase } from "./ICreateUserUseCase";

export class CreateUserUseCase implements ICreateUserUseCase {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(dto: CreateUserDTO): Promise<IUser> {
        const existing = await this.userRepository.findByEmail(dto.email);
        if (existing) {
            throw new Error(`User with email "${dto.email}" already exists.`);
        }

        const user = await this.userRepository.create(dto);
        return user;
    }
}
