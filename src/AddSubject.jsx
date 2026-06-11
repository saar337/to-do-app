import React from "react";

const AddSubject = ({
  subject,
  setSubject,
  onAddSubject
}) => {
  return (
    <div>
      <input
        type="text"
        placeholder="הכנס נושא..."
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <button onClick={onAddSubject}>
        הוסף נושא
      </button>
    </div>
  );
};

export default AddSubject;