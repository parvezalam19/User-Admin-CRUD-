import {
  takeEvery,
  take,
  takeLatest,
  put,
  call,
  delay,
  fork,
  all,
} from "redux-saga/effects";
import * as types from "./actionType";
import {
  loadUserSuccess,
  loadUserError,
  createUserSuccess,
  createUserError,
} from "./action";
import { createUsersApi, loadUsersApi } from "./api";

// Load users

export function* onLoadUserStartAsync() {
  console.log("call");
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUserSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUserError(error.response));
  }
}

export function* onLoadUsers() {
  yield takeEvery(types.LOAD_USER_START, onLoadUserStartAsync);
}

// create new user

export function* onCreateUserStartAsync({ payload }) {
 try {
    const response = yield call(createUsersApi, payload);
    if (response.status === 201) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response));
  }
}

export function* onCreateUsers() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

const userSagas = [fork(onLoadUsers), fork(onCreateUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
