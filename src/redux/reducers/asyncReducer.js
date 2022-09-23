import { asyncTypes } from "../types/asyncTypes";

const initialState = {
  posts: [],
  isFetching: false,
  errorMessage: undefined,
};

const asyncReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case asyncTypes.GET_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case asyncTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: payload,
      };
    case asyncTypes.GET_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
}


export default asyncReducer;
