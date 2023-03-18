import { createSlice } from '@reduxjs/toolkit';
import { DifficultyTypes } from '../../common/constants/dropdown/dropdownConstants';

interface UserState {
    username: string;
    difficulty: DifficultyTypes;
}

const initialState: UserState = {
    username: '',
    difficulty: 'easy'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload;
        },
        setDifficultyState: (state, action) => {
            state.difficulty = action.payload;
        },
        resetUser: (state) => {
            state.username = '';
            state.difficulty = 'easy';
        }
    }
});

export const { setUser, setDifficultyState, resetUser } = userSlice.actions;
export default userSlice.reducer;