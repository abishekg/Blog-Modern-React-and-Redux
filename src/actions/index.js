import { FETCH_POSTS, FETCH_USERS } from "./config";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from 'lodash'


export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: response.data })
}

export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

//Memoizing a function call
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: FETCH_USERS, payload: response.data })
})


// export const fetchPostsAndUsers = () => async dispatch => {

// }

