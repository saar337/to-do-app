import React, { useState } from "react";

const getUrgencyColor = (urgency) => {
  switch (urgency) {
    case "high":
      return "red";
    case "medium":
      return "orange";
    default:
      return "green";
  }
};


const TodoItem = ({ todo, onDelete, onToggle, onUpdateUrgency }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        cursor: "pointer",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            onClick={(e) => e.stopPropagation()}
          />

          <span
            style={{textDecoration: todo.completed ? "line-through" : "none",}}>
            {todo.text}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
          <div
            title={`Urgency: ${todo.urgency}`}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "20%",
              backgroundColor: getUrgencyColor(todo.urgency),
            }}/>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
          }}>
          מחק
        </button>
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            marginTop: "10px",
            paddingTop: "10px",
            borderTop: "1px solid #ddd",
            color: "#555",
          }}>
          <strong>תיאור:</strong>
          <br />
          {todo.description || "אין תיאור"}
       <div style={{ marginTop: "10px" }}>
      <strong>דחיפות:</strong>

      <select
        value={todo.urgency}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => onUpdateUrgency(todo.id, e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
    </div>
      )}
      </div>
)}

export default TodoItem;