import React from "react";
import { useDispatch } from "react-redux";
const TodoItem = ({ todo }) => {
  const { id, body, title } = todo;
  const dispatch = useDispatch();
  return (
    <>
      <td>{id}</td>
      <td>{body.slice(0, 100) + "..."}</td>
      <td>{title}</td>
      <td style={{display: 'flex'}}>
        <button className='btn delete_btn' onClick={() => dispatch({ type: "UPDATE_TODO", id })}>Edit</button> &nbsp;&nbsp;{" "}
        <button className='btn edit_btn' onClick={() => dispatch({ type: "DELETE_TODO", id })}>
          Delete
        </button>
      </td>
    </>
  );
};

export default TodoItem;
