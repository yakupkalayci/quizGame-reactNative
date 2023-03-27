import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  questions: [],
  index: 1
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
      state.index = state.index + 1;

      state.questions[index].users_answer = {
        result,
        selected: userAnswer
      };
    },
    resetIndex: (state) => {
      state.index = 1;
    }
  }
});

export const { fetchQuestions, fetchQuestionsSuccess, fetchQuestionsFailure, setAnswer, resetIndex } = questionsSlice.actions;
export default questionsSlice.reducer;
