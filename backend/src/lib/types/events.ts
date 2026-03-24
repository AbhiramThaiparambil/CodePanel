
export type UserCreateEvent = {
    name: string;
    email: string;
    password: string;
};

export type UserDeleteEvent = {
    id: string;
};