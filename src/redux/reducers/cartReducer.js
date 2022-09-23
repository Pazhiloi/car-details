import { cartList } from "../../data"
import { cartTypes } from "../types/cartTypes"

const initialState = {
  cart: cartList,
  total: 0,
  amount: 0
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartTypes.CLEAR_CART:
      return { ...state, cart: [] };
    case cartTypes.REMOVE:
      return { ...state, cart: payload };
    case cartTypes.TOGGLE_AMOUNT:
      return { ...state, cart: payload.cart };
    case cartTypes.GET_TOTALS:
      return { ...state, total: payload.total, amount: payload.amount };
    case cartTypes.ADD_TO_CART:
      return { ...state, cart: payload };
    default:
      return state;
  }
}

export default cartReducer
