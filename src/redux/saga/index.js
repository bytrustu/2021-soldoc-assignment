import { all, fork } from 'redux-saga/effects';
import reservationSaga from './reservation';

export default function* rootSaga() {
  yield all([
    fork(reservationSaga),
  ]);
}