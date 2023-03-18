import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchQuestions, fetchQuestionsSuccess, fetchQuestionsFailure } from './questionsSlice';
import axios from 'axios';

async function fetchQuestionsWorker() {
    return await axios.get('https://opentdb.com/api.php?amount=10');
}

function* fetchQuestionsSaga() {
    yield put(fetchQuestions());
    try {
        const response = yield call(fetchQuestionsWorker);

        yield put(fetchQuestionsSuccess(response.data.results));
    } catch(err) {
        yield put(fetchQuestionsFailure(err));
    }
}

export function* QuestionsSaga() {
    yield takeLatest('fetchQuestions', fetchQuestionsSaga);
}