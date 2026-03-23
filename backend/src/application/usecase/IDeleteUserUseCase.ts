import { DeleteUserDTO } from "../dto/DeleteUserDTO";

export interface IDeleteUserUseCase {
    execute(dto: DeleteUserDTO): Promise<void>;
}
