import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import { User } from './UserTypes';
import { AppDispatch } from '../RootStore';
import { app } from '../../firebase';
import { getUsers } from './UserReducer';

const firestore = getFirestore(app);


export const fetchUsers = createAsyncThunk<User[], void, { dispatch: AppDispatch }>(
    'users/fetchUsers',
    async (_, { dispatch }) => {
        try {
            const _query = query(collection(firestore, 'aquafina_users'), orderBy('score', 'desc'));
            const querySnapshot = await getDocs(_query);
            const usersData: User[] = [];
            querySnapshot.forEach((doc) => {
                const user: any = doc.data();
                const selectedUserFields = {
                    avatar: user.avatar,
                    name: user.name,
                    score: user.score,
                };
                usersData.push(selectedUserFields);
            });

            dispatch(getUsers(usersData));
            return usersData;
        } catch (error) {
            console.error('Error fetching users: ', error);
            throw error;
        }
    }
);
