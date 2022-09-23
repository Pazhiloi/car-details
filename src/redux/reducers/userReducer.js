import { userTypes } from "../types/userTypes";

const initialState = {
  user: false
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case userTypes.LOGIN:
    return { ...state, user: true}
  case userTypes.LOGOUT:
    return { ...state, user: false}

  default:
    return state
  }
}

export default userReducer;
