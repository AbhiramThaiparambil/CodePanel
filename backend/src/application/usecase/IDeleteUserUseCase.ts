import { DeleteUserDTO } from "../dto/DeleteUserDTO.js";

export interface IDeleteUserUseCase {
    execute(dto: DeleteUserDTO): Promise<void>;
}
