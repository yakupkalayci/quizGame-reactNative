import { createSlice } from '@reduxjs/toolkit';
import { DifficultyTypes } from '../../common/constants/dropdown/dropdownConstants';
import { screenNames } from '../../common/constants/screen/screenNames';

interface UserState {
    username: string;
    difficulty: DifficultyTypes;
    screen: screenNames;
}

const initialState: UserState = {
    username: '',
    difficulty: 'easy',
    screen: 'intro'
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
        },
        setScreenName: (state, action) => {
            state.screen = action.payload;
        }
    }
});

export const { setUser, setDifficultyState, resetUser, setScreenName } = userSlice.actions;
export default userSlice.reducer;