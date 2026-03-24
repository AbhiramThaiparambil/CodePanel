export const TOKENS = {
    // Repositories
    IUserRepository: Symbol.for("IUserRepository"),

    // Use Cases
    ICreateUserUseCase: Symbol.for("ICreateUserUseCase"),
    IDeleteUserUseCase: Symbol.for("IDeleteUserUseCase"),
} as const;
