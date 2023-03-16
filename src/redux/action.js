import * as types from "./actionType";

export const addUserData = (data, id,type) => {
  console.log(data);
  return {
    type: types.ADD_USER_DATA,
    payload: { data, id ,type},
  };
};

export const deleteUserData = (id) => {
  return {
    type: types.DELETE_USERS_DATA,
    payload: id,
  };
};

export const updateUserData = (id) => {
    console.log(id)
  return {
    type: types.UPDATE_USER_DATA,
    payload: id,
  };
};
