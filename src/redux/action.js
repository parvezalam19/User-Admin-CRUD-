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

// export const addUserData = (data, id, type) => {
//   console.log(data);
//   return {
//     type: types.ADD_USER_DATA,
//     payload: { data, id, type },
//   };
// };

// export const deleteUserData = (id) => {
//   return {
//     type: types.DELETE_USERS_DATA,
//     payload: id,
//   };
// };

// export const updateUserData = (id) => {
//   console.log(id);
//   return {
//     type: types.UPDATE_USER_DATA,
//     payload: id,
//   };
// };
