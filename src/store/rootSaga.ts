import { all } from 'redux-saga/effects';
import { QuestionsSaga } from './questions/questionsSaga';

export default function* rootSaga() {
    yield all([
        ...QuestionsSaga
    ])
}