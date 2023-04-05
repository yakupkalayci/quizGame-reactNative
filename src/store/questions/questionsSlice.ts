import { createSlice } from '@reduxjs/toolkit';

import { IQuestion } from './_types/question';

interface InıtıalState {
  loading: boolean,
  error: any,
  questions: IQuestion[],
  index: number
}

const initialState:InıtıalState = {
  loading: false,
  error: null,
  questions: [],
  index: 0
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
      state.index = 0;
    }
  }
});

export const { fetchQuestions, fetchQuestionsSuccess, fetchQuestionsFailure, setAnswer, resetIndex } = questionsSlice.actions;
export default questionsSlice.reducer;
