import React from "react";

const FilterToolbar = ({ filter, setFilter }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px"
      }}
    >
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>All</button>
      <button onClick={() => setFilter("active")} disabled={filter === "active"}>Active</button>
      <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>Completed</button>
    </div>
  );
};

export default FilterToolbar;