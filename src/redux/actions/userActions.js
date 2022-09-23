import { userTypes } from "../types/userTypes"

export const login = () => {
  return {
    type: userTypes.LOGIN
  }
}
export const logout = () => {
  return {
    type: userTypes.LOGOUT
  }
}