import { asyncTypes } from "../types/asyncTypes"
const getPostsStart = () => ({
  type: asyncTypes.GET_POSTS_START
}
)
const getPostsSuccess = (payload) => ({
  type: asyncTypes.GET_POSTS_SUCCESS,
  payload
});

const getPostsFailure = (errorMessage) => ({
  type: asyncTypes.GET_POSTS_FAILURE,
  payload: errorMessage
});




export const getPostsAsync = () => {
return async (dispatch) => {
  try {
    dispatch(getPostsStart())
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json()
    console.log(data);
   dispatch(getPostsSuccess(data));
  } catch (error) {
    dispatch(getPostsFailure(error.message))
  }
}

}