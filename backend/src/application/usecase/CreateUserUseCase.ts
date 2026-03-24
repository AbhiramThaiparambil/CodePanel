import { inject, injectable } from "tsyringe";
import { TOKENS } from "../../constant/tokens.js";
import { IUser } from "../domin/IUser.js";
import { IUserRepository } from "../domin/IUserRepository.js";
import { CreateUserDTO } from "../dto/CreateUserDTO.js";
import { ICreateUserUseCase } from "./ICreateUserUseCase.js";

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
