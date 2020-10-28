import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { addNewTodo, updateTodo } from "../redux/actions";

const TodoInput = ({ addNewTodo, updateTodo }) => {
  const post_by_id = useSelector(state => state.post_by_id)
  const [post, setPost] = useState({
    title: "title",
    body: "",
    id: `${Math.floor(Math.random() * 1000)}`,
  });
  const [disable, setDisable] = useState(false);
  const { body } = post;

  const handleChange = (e) => {
    const newTodo = e.target.value;
    setPost({ ...post, body: newTodo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (body.length > 0) {
      addNewTodo({ post });
    } else return;
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (body.length > 0) {
      updateTodo({ post });
    } else return;
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  useEffect(() => {
    updatePost();
  }, [post_by_id]);

  const updatePost = () => {
    if (post_by_id.length > 0) {
      setPost({ ...post, body: post_by_id[0].body, id: post_by_id[0].id });
      setDisable(true);
    }
  };
  return (
    <>
      <input
        className="todoInput"
        onChange={handleChange}
        type="text"
        placeholder="Enter your Post"
        value={body || post_by_id.body}
      />
      <button
        style={{ display: disable ? "none" : "inline" }}
        className="button add_btn"
        type="submit"
        onClick={handleSubmit}
      >
        Add
      </button>
      <button
        style={{ display: disable ? "inline" : "none" }}
        className="button update_btn"
        type="submit"
        onClick={handleUpdate}
      >
        Update
      </button>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (post) => dispatch(addNewTodo(post)),
  updateTodo: (post) => dispatch(updateTodo(post)),
});

export default connect(null, mapDispatchToProps)(TodoInput);
