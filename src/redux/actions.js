export const ADD_TODO = "ADD_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const UPDATE_TODO = "UPDATE_TODO";
export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";
export const NOTIFICATION_SUCCESS = "NOTIFICATION_SUCCESS";
export const NOTIFICATION_FAILED = "NOTIFICATION_FAILED";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";
export const FETCH_POST_BY_ID = "FETCH_POST_BY_ID";

export function addNewTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function updateTodo(payload) {
  return { type: UPDATE_TODO, payload };
}

export function fetchTodos() {
  return { type: FETCH_TODOS };
}
