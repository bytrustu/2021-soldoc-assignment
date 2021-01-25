import { put, takeLatest, all, fork } from 'redux-saga/effects';
import {
  ADD_RESERVATION_REQUEST,
  ADD_RESERVATION_ERROR,
  ADD_RESERVATION_SUCCESS
} from '../reducers/reservation';

function* addReservation(action) {
  try {
    yield put({
      type: ADD_RESERVATION_SUCCESS,
      payload: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_RESERVATION_ERROR,
    });
  }
}

function* watchAddReservation() {
  yield takeLatest(ADD_RESERVATION_REQUEST, addReservation);
}

export default function* reservationSaga() {
  yield all([
    fork(watchAddReservation),
  ]);
}
