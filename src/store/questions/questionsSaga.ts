import { call, put, takeLatest, select, fork } from 'redux-saga/effects';
import axios from 'axios';
import { decode } from 'html-entities';
import { fetchQuestions, fetchQuestionsSuccess, fetchQuestionsFailure } from './questionsSlice';
import { IQuestion } from './_types/question';

async function fetchQuestionsWorker(difficulty) {
    return await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`);
}

export const convert = (data:IQuestion[]) => data.forEach((item) => {
    item.question = decode(item.question);    
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

function* watchQuestionsSaga() {
    yield takeLatest('fetchQuestions', fetchQuestionsSaga);
}

export const QuestionsSaga = [
    fork(watchQuestionsSaga)
];