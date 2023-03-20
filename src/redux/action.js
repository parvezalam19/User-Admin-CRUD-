import * as types from "./actionType";

// load users data on reload page

export const loadUserStart = () => {
  return {
    type: types.LOAD_USER_START,
  };
};

export const loadUserSuccess = (users) => {
  return {
    type: types.LOAD_USER_SUCCESS,
    payload: users,
  };
};

export const loadUserError = (error) => {
  return {
    type: types.LOAD_USER_ERROR,
    payload: error,
  };
};

// Add users in api

export const createUserStart = (users) => {
  return {
    type: types.CREATE_USER_START,
    payload: users,
  };
};

export const createUserSuccess = () => {
  return {
    type: types.CREATE_USER_SUCCESS,
  };
};

export const createUserError = (error) => {
  return {
    type: types.CREATE_USER_ERROR,
    payload: error,
  };
};

// delete user start

export const deleteUserStart = (id) => {
  return {
    type: types.DELETE_USER_START,
    payload: id,
  };
};

export const deleteUserSuccess = (user) => {
  return {
    type: types.DELETE_USER_SUCCESS,
    payload: user,
  };
};

export const deleteUserError = (error) => {
  return {
    type: types.DELETE_USER_ERROR,
    payload: error,
  };
};

// Edit Users Start

export const editUserStart = ( userInfo , userID) => {
  return {
    type: types.EDIT_USER_START,
    payload: {  userInfo ,userID},
  };
};

export const editUserSuccess = () => {
  return {
    type: types.EDIT_USER_SUCCESS,
  };
};

export const editUserError = (error) => {
  return {
    type: types.EDIT_USER_ERROR,
    payload: error,
  };
};

export const takeEditObj = (data) => {
  return {
    type: types.GET_EDIT_DATA,
    payload: data,
  };
};
