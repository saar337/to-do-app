import React, { useState } from "react";

const AddToDo = ({onAdd,onClose,subjects}) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const handleSubmit = () => {
    if (taskName.trim() === "") return;
    onAdd({text: taskName, description, subjectId: selectedSubject});
    setTaskName("");
    setDescription("");
    setSelectedSubject("all");
    onClose();};

  return (
    <div className="modal">
        <h2>הוספת משימה</h2>
        <input
            type="text"
            placeholder="שם המשימה"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
            placeholder="תיאור המשימה"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
        >
        {subjects.map((subject) => (
          <option
            key={subject.id}
            value={subject.id}
          >
            {subject.name}
          </option>
        ))}
      </select>

      <button onClick={handleSubmit}>
        שמור
      </button>

      <button onClick={onClose}>
        ביטול
      </button>

    </div>
  );
};

export default AddToDo;


// import React, { useState } from "react";

// const AddToDo = ({task, setTask,onAdd}) => {

//   return (
//     <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
//       <input
//         type="text"
//         placeholder="הכנס משימה..."
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />

//       <button onClick={onAdd}>
//         הוסף משימה
//       </button>
//     </div>
//   );
// };

// export default AddToDo;