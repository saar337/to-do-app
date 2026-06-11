import React from "react";
import TodoItem from "./TodoItem";

const Subject = ({ title, todos, onDelete, onToggle }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{title}</h2>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Subject;