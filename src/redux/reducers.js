import {
  FETCH_TODOS_SUCCESS,
  SHOW_LOADING,
  HIDE_LOADING,
  NOTIFICATION_FAILED,
  NOTIFICATION_SUCCESS,
  HIDE_NOTIFICATION,
  FETCH_POST_BY_ID,
} from "./actions";

const initialState = {
  todos: [],
  post_by_id: [],
  loading: false,
  notification_success: false,
  notification_failed: false,
  hide_notification: false,
};

function rootReducer(state = initialState, action) {
  if (action.type === FETCH_TODOS_SUCCESS) {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.data),
    });
  }
  if (action.type === FETCH_POST_BY_ID) {
    console.log('action', action)
    return Object.assign({}, state, {
      post_by_id: state.post_by_id.concat(action.data),
    });
  }
  if (action.type === SHOW_LOADING) {
    return Object.assign({}, state, {
      loading: true,
    });
  }
  if (action.type === HIDE_LOADING) {
    return Object.assign({}, state, {
      loading: false,
    });
  }
  if (action.type === NOTIFICATION_SUCCESS) {
    return Object.assign({}, state, {
      notification_success: true,
    });
  }
  if (action.type === NOTIFICATION_FAILED) {
    return Object.assign({}, state, {
      notification_failed: true,
    });
  }
  if (action.type === HIDE_NOTIFICATION) {
    return Object.assign({}, state, {
      hide_notification: true,
    });
  }
  return state;
}

export default rootReducer;
