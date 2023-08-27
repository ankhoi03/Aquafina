import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, CurrentUser } from "./AuthTypes";
import { images } from "@assets";

const initialState: AuthState = {
    currentUser: {
        avatar: images.ic_user,
        name: 'User is not sign in',
        phone: '',
        password: '',
        score: 0,
    },
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<CurrentUser>) => {
            state.currentUser = action.payload;
            state.isLogin = true;
        },
        logout: (state: AuthState) => {
            state.currentUser = initialState.currentUser;
            state.isLogin = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
