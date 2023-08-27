import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { AuthState, CurrentUser } from './AuthTypes';
import { AppDispatch } from '../RootStore';
import { app } from '../../firebase';
import { login } from './AuthReducer';
import { useAppDispatch } from '../RootStore';

const firestore = getFirestore(app);

export const performLogin = createAsyncThunk<void, { phone: string, password: string }, { dispatch: AppDispatch }>(
    'auth/performLogin',
    async (_, { dispatch }) => {
        try {
            const _query = query(collection(firestore, 'aquafina_users'), where('phone', '==', _.phone));
            const querySnapshot = await getDocs(_query);
            if (querySnapshot.empty) {
                throw new Error('User not found');
            }

            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            console.log('userData: ', userData);

            if (userData.password !== _.password) {
                throw new Error('Invalid password');
            }

            const currentUser: CurrentUser = {
                avatar: userData.avatar,
                name: userData.name,
                phone: userData.phone,
                password: userData.password,
                score: userData.score,
            };

            dispatch(login(currentUser));
        } catch (error) {
            console.error('Login error: ', error);
            throw error;
        }
    }
);

export default performLogin;
