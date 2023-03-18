import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    questions: []
};

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        fetchQuestions: (state) => {
            state.loading = true;
        },
        fetchQuestionsSuccess: (state, action) => {
            state.loading = false,
            state.questions = action.payload;
        },
        fetchQuestionsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { fetchQuestions, fetchQuestionsSuccess, fetchQuestionsFailure } = questionsSlice.actions;
export default questionsSlice.reducer;