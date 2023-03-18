import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

// Slices
import userReducer from './user/userSlice';
import questionsSlice from './questions/questionsSlice';
import { QuestionsSaga } from './questions/questionsSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userReducer,
        questions: questionsSlice
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(QuestionsSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch