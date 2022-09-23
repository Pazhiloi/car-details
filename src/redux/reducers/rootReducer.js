import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import asyncReducer from "./asyncReducer";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "cart", "user"],
};


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  posts: asyncReducer,
});

export default persistReducer(persistConfig, rootReducer);
