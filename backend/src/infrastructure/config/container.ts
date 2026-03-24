import "reflect-metadata";
import { container } from "tsyringe";
import { TOKENS } from "../../constant/tokens.js";

import { CreateUserUseCase } from "../../application/usecase/CreateUserUseCase.js";
import { DeleteUserUseCase } from "../../application/usecase/DeleteUserUseCase.js";
import { UserRepository } from "../repository/UserRepository.js";

//  Repositories
container.register(TOKENS.IUserRepository, { useClass: UserRepository });

//  Use Cases
container.register(TOKENS.ICreateUserUseCase, { useClass: CreateUserUseCase });
container.register(TOKENS.IDeleteUserUseCase, { useClass: DeleteUserUseCase });

export { container };
