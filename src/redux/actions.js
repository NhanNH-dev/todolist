export const ADD_TODO = "ADD_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

export function addNewTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function fetchTodos() {
  return { type: FETCH_TODOS };
}
