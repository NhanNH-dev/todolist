import axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";

const ROOT_URL = "https://jsonplaceholder.typicode.com/posts";

export function* fetchTodos() {
  try {
    const response = yield call(axios.get, `${ROOT_URL}`);
    const { data } = response;
    yield put({ type: "FETCH_TODOS_SUCCESS", data });
  } catch (error) {
    console.log("fetchTodos error:", error.message);
  }
}

function* watchFetchTodos() {
  yield takeEvery("FETCH_TODOS", fetchTodos);
}

export function* addNewTodo(action) {
  const {
    payload: { task },
  } = action;
  const body = JSON.stringify(task);
  try {
    yield call(axios.post, `${ROOT_URL}`, { body });
    yield put({ type: "FETCH_TODOS" });
  } catch (error) {
    console.log("createTodo error:", error.message);
  }
}

function* watchAddToDo() {
  yield takeEvery("ADD_TODO", addNewTodo);
}

export function* deleteTodo({ id }) {
  console.log("id", id);
  try {
    yield call(axios.delete, `${ROOT_URL}/${id}`);
    yield put({ type: "FETCH_TODOS" });
  } catch (error) {
    console.log("deleteTodo Error:", error.message);
  }
}

function* watchDeleteTodo() {
  yield takeEvery("DELETE_TODO", deleteTodo);
}

export function* updateTodo({ id }) {
  console.log("id", id);
  try {
    yield call(axios.delete, `${ROOT_URL}/${id}`);
    yield put({ type: "FETCH_TODOS" });
  } catch (error) {
    console.log("deleteTodo Error:", error.message);
  }
}

function* watchUpdateTodo() {
  yield takeEvery("DELETE_TODO", deleteTodo);
}

export default function* rootSaga() {
  console.log("root saga");
  yield all([
    watchFetchTodos(),
    watchAddToDo(),
    watchDeleteTodo(),
    watchUpdateTodo(),
  ]);
}
