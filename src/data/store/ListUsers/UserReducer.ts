import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {User,ListUsersState } from "./UserTypes";

const initialState: ListUsersState = {
    users: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        }
    },
});

export const { getUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
