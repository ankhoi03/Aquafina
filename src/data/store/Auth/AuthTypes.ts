export interface CurrentUser {
    avatar: string;
    name: string;
    phone: string;
    password: string;
    score: number;
}

export interface AuthState {
    currentUser: CurrentUser;
    isLogin: boolean;
}
