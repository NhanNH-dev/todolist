import {
  FETCH_TODOS_SUCCESS,
} from "./actions";

const initialState = {
  todos: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === FETCH_TODOS_SUCCESS) {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.data),
    });
  }
  return state;
}

export default rootReducer;
