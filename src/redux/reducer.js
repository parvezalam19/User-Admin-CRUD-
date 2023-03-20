import * as types from "./actionType";

const initialValue = {
  users: [],
  editUser: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialValue, action) => {
  switch (action.type) {
    case types.LOAD_USER_START:
    case types.CREATE_USER_START:
    case types.DELETE_USER_START:
    case types.EDIT_USER_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case types.CREATE_USER_SUCCESS:
    case types.EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        editUser: [],
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item, i) => item.id !== action.payload),
      };
    case types.LOAD_USER_ERROR:
    case types.CREATE_USER_ERROR:
    case types.DELETE_USER_ERROR:
    case types.EDIT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.GET_EDIT_DATA:
      return {
        ...state,
        loading: false,
        editUser: [action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
