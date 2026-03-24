import { inject, injectable } from "tsyringe";
import { TOKENS } from "../../constant/tokens.js";
import { IUserRepository } from "../domin/IUserRepository.js";
import { DeleteUserDTO } from "../dto/DeleteUserDTO.js";
import { IDeleteUserUseCase } from "./IDeleteUserUseCase.js";

@injectable()
export class DeleteUserUseCase implements IDeleteUserUseCase {
    constructor(@inject(TOKENS.IUserRepository) private readonly userRepository: IUserRepository) { }

    async execute(dto: DeleteUserDTO): Promise<void> {
        const existing = await this.userRepository.findByClerkId(dto.clerkId);
        if (!existing) {
            throw new Error(`User with id "${dto.clerkId}" not found.`);
        }

        const deleted = await this.userRepository.delete(existing.id);
        if (!deleted) {
            throw new Error(`Failed to delete user with id "${existing.id}".`);
        }
    }
}
