import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <table id="customers">
      <thead>
        <tr>
          <th>ID</th>
          <th>Body</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo, i) => (
          <tr key={i}>
            <TodoItem todo={todo} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
