import React from "react";
import { useDispatch } from "react-redux";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, body, title } = todo;
  return (
    <>
      <td>{id}</td>
      <td>{body.slice(0, 80) + "..."}</td>
      <td>{title}</td>
      <td style={{ display: "flex" }}>
        <button
          className="btn edit_btn "
          onClick={() => dispatch({ type: "GET_POST_BY_ID", id })}
        >
          Edit
        </button>
        &nbsp;&nbsp;
        <button
          className="btn delete_btn"
          onClick={() => dispatch({ type: "DELETE_TODO", id })}
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default TodoItem;
