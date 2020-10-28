import { combineReducers } from "redux";
import postsReducer from "./reducers";

export default combineReducers({
  posts: postsReducer
});
