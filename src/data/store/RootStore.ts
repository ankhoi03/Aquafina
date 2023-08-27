import { configureStore } from '@reduxjs/toolkit';
import {authReducer, usersReducer } from '@data/store';
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const _RootStore = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
    },
    
});

export type RootState = ReturnType<typeof _RootStore.getState>;
export type AppDispatch = typeof _RootStore.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const selectUsers = (state: RootState) => state.users.users;


export const RootStore = _RootStore;
