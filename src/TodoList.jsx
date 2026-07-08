import React from "react";
import TodoItem from "./TodoItem";
import TodoSubject from "./TodoSubject"

const TodoList = ({ todos, onDelete, onToggle, onUpdateUrgency}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} onUpdateUrgency={onUpdateUrgency}/>
      ))}
    </div>
  );
};

export default TodoList;