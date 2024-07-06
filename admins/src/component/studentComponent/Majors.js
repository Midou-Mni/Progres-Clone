import React, { useState } from "react";
import Modules from "./Modules";

function Majors() {
  const [majors, setMajors] = useState([]);
  const [newMajor, setNewMajor] = useState("");
  const [selectedMajor, setSelectedMajor] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMajor.trim() !== "") {
      setMajors([...majors, { name: newMajor , modules: [] }]);
      setNewMajor("");
    }
  };

  const handleDelete = () => {
    setMajors(majors.slice(0, majors.length - 1));
  };

  const handleSelectMajor = (major) => {
    setSelectedMajor(major);
  };

  const handleAddModule = (module, coefficient) => {
    setMajors((prevMajors) =>
      prevMajors.map((major) =>
        major.name === selectedMajor.name
          ? {
              ...major,
              modules: [...major.modules, { module, coefficient }],
            }
          : major
      )
    );
  };

  return (
    <div>
      <h1>Majors</h1>

      <input
        type="text"
        placeholder="Add a Major"
        value={newMajor}
        onChange={(e) => setNewMajor(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleDelete}>Delete</button>

      <ul>
        {majors.map((major, index) => (
          <li key={index}>
            <button onClick={() => handleSelectMajor(major)}>
              {major.name}
            </button>
          </li>
        ))}
      </ul>

      {selectedMajor && (
        <Modules
          major={selectedMajor}
          onAddModule={handleAddModule}
          onClose={() => setSelectedMajor(null)}
        />
      )}
    </div>
  );
}

export default Majors;
