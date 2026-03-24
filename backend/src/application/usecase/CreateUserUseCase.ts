import { inject, injectable } from "tsyringe";
import { TOKENS } from "../../constant/tokens";
import { IUser } from "../domin/IUser";
import { IUserRepository } from "../domin/IUserRepository";
import { CreateUserDTO } from "../dto/CreateUserDTO";
import { ICreateUserUseCase } from "./ICreateUserUseCase";

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
    constructor(@inject(TOKENS.IUserRepository) private readonly userRepository: IUserRepository) { }

    async execute(dto: CreateUserDTO): Promise<IUser> {
        const existing = await this.userRepository.findByEmail(dto.email);
        if (existing) {
            throw new Error(`User with email "${dto.email}" already exists.`);
        }

        const user = await this.userRepository.create(dto);
        return user;
    }
}
