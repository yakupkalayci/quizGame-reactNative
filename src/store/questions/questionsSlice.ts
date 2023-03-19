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
      (state.loading = false), (state.questions = action.payload);
    },
    fetchQuestionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setAnswer: (state, action) => {
      const { userAnswer, result, index } = action.payload;

      state.questions[index].users_answer = {
        result,
        selected: userAnswer
      };
    }
  }
});

export const { fetchQuestions, fetchQuestionsSuccess, fetchQuestionsFailure, setAnswer } = questionsSlice.actions;
export default questionsSlice.reducer;
