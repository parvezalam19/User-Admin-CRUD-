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
  deleteUserSuccess,
  deleteUserError,
} from "./action";
import { createUsersApi, deleteUsersApi, loadUsersApi } from "./api";

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
    yield put(createUserError(error.response.data));
  }
}

export function* onCreateUsers() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

// delete user data

function* onDeleteUserStartAsync(id) {
  try {
    const response = yield call(deleteUsersApi, id);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(id));
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

export function* onDeleteUsers() {
  while (true) {
    const { payload: id } = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserStartAsync, id);
  }
}

const userSagas = [fork(onLoadUsers), fork(onCreateUsers), fork(onDeleteUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
