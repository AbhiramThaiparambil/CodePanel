import { inject, injectable } from "tsyringe";
import { TOKENS } from "../../constant/tokens";
import { IUserRepository } from "../domin/IUserRepository";
import { DeleteUserDTO } from "../dto/DeleteUserDTO";
import { IDeleteUserUseCase } from "./IDeleteUserUseCase";

@injectable()
export class DeleteUserUseCase implements IDeleteUserUseCase {
    constructor(@inject(TOKENS.IUserRepository) private readonly userRepository: IUserRepository) { }

    async execute(dto: DeleteUserDTO): Promise<void> {
        const existing = await this.userRepository.findById(dto.userId);
        if (!existing) {
            throw new Error(`User with id "${dto.userId}" not found.`);
        }

        const deleted = await this.userRepository.delete(dto.userId);
        if (!deleted) {
            throw new Error(`Failed to delete user with id "${dto.userId}".`);
        }
    }
}
