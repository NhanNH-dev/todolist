import axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";

const ROOT_URL = "https://jsonplaceholder.typicode.com/posts";

// get all post
export function* fetchTodos() {
  try {
    yield put({ type: "SHOW_LOADING" });
    const response = yield call(axios.get, `${ROOT_URL}`);
    const { data } = response;
    yield put({ type: "FETCH_TODOS_SUCCESS", data });
    yield put({ type: "HIDE_LOADING" });
  } catch (error) {
    yield put({ type: "HIDE_LOADING" });
    console.log("Fetch List Post Failed", error.message);
  }
}
function* watchFetchTodos() {
  yield takeEvery("FETCH_TODOS", fetchTodos);
}

// add new post
export function* addNewTodo(action) {
  const {
    payload: { post },
  } = action;
  const body = JSON.stringify(post);
  try {
    yield call(axios.post, `${ROOT_URL}`, { body });
    yield put({ type: "FETCH_TODOS" });
    yield put({ type: "NOTIFICATION_SUCCESS" });
  } catch (error) {
    yield put({ type: "NOTIFICATION_FAILED" });
    console.log("createTodo error:", error.message);
  }
}
function* watchAddToDo() {
  yield takeEvery("ADD_TODO", addNewTodo);
}

//delete post
export function* deleteTodo({ id }) {
  try {
    yield call(axios.delete, `${ROOT_URL}/${id}`);
    yield put({ type: "FETCH_TODOS" });
    yield put({ type: "NOTIFICATION_SUCCESS" });
  } catch (error) {
    yield put({ type: "NOTIFICATION_FAILED" });
    console.log("deleteTodo Error:", error.message);
  }
}
function* watchDeleteTodo() {
  yield takeEvery("DELETE_TODO", deleteTodo);
}

//update post
export function* updateTodo(action) {
  const {
    payload: { post },
  } = action;
  const body = JSON.stringify(post);
  try {
    yield call(axios.put, `${ROOT_URL}/${post.id}`, { body });
    yield put({ type: "FETCH_TODOS" });
    yield put({ type: "NOTIFICATION_SUCCESS" });
  } catch (error) {
    yield put({ type: "NOTIFICATION_FAILED" });
    console.log("deleteTodo Error:", error.message);
  }
}
function* watchUpdateTodo() {
  yield takeEvery("UPDATE_TODO", updateTodo);
}

//get post by id
export function* getPostById({ id }) {
  try {
    const post_by_id = yield call(axios.get, `${ROOT_URL}/${id}`);
    const { data } = post_by_id;
    yield put({ type: "FETCH_POST_BY_ID", data });
  } catch (error) {
    yield put({ type: "NOTIFICATION_FAILED" });
    console.log("deleteTodo Error:", error.message);
  }
}
function* watchGetPostById() {
  yield takeEvery("GET_POST_BY_ID", getPostById);
}

export default function* rootSaga() {
  console.log("root saga");
  yield all([
    watchFetchTodos(),
    watchAddToDo(),
    watchDeleteTodo(),
    watchUpdateTodo(),
    watchGetPostById(),
  ]);
}
