export interface User {
    avatar: string;
    name: string;
    score: number;
}

export interface ListUsersState {
    users: User[];
}