import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const TodoInput = ({ addNewTodo }) => {
  const [task, setTask] = useState({
    userId: "1",
    title: "title",
    body: "",
  });

  const handleChange = (e) => {
    const newTodo = e.target.value;
    setTask({ ...task, body: newTodo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.body.length > 0) {
      addNewTodo({ task });
    } else return;
    setTask({ ...task, body: "" });
  };
  return (
    <>
      <input
        className="todoInput"
        onChange={handleChange}
        type="text"
        placeholder="Enter your task"
        value={task.body}
      />
      <button className='add_btn' type="submit" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (task) => dispatch(addNewTodo(task)),
});

export default connect(null, mapDispatchToProps)(TodoInput);
