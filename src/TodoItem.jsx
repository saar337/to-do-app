import React from "react";

const TodoItem = ({ todo, onDelete, onToggle}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
        marginBottom: "8px"
      }}
    >
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>

      <span>{todo.text}</span>

      <button onClick={() => onDelete(todo.id)}>
        מחק
      </button>
    </div>
  );
};

export default TodoItem;