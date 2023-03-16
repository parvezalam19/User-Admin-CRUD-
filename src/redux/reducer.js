import * as types from "./actionType";

const initialValue = {
  users: [],
  editUser: [],
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case types.ADD_USER_DATA:
      console.log(action.payload.type.type);
      let newData = [action.payload.data, ...state.users];
      console.log(newData)
      let updatedData = state.users.map((item, i) => {
        return item.id === action.payload.id ? action.payload.data : item;
      });
      return {
        ...state,
        users: action.payload.type.type === "Add" ? newData : updatedData,
        editUser : []
      };
    case types.DELETE_USERS_DATA:
      return {
        ...state,
        users: state.users.filter((user, i) => user.id !== action.payload),
      };
    case types.UPDATE_USER_DATA:
      console.log(state.users);

      return {
        ...state,
        editUser: state.users.filter((item, i) => item.id === action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
