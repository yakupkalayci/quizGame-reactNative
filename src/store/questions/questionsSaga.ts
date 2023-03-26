import { call, put, takeLatest, select } from 'redux-saga/effects';
import { fetchQuestions, fetchQuestionsSuccess, fetchQuestionsFailure } from './questionsSlice';
import axios from 'axios';

async function fetchQuestionsWorker(difficulty) {
    return await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`);
}

export const convert = data => data.forEach((item) => {
    item.users_answer = {
        selected: '',
        result: null
    };
});

function* fetchQuestionsSaga() {
    yield put(fetchQuestions());
    try {
        const difficulty = yield select(state => state.user.difficulty);
        const response = yield call(() => fetchQuestionsWorker(difficulty));

        convert(response.data.results);

        yield put(fetchQuestionsSuccess(response.data.results));
    } catch(err) {
        yield put(fetchQuestionsFailure(err));
    }
}

export function* QuestionsSaga() {
    yield takeLatest('fetchQuestions', fetchQuestionsSaga);
}