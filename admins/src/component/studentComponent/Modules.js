import React, { useState } from "react";

function Modules({ major, onAddModule, onClose }) {
  const [newModule, setNewModule] = useState("");
  const [coefficient, setCoefficient] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newModule.trim() !== "" && coefficient > 0) {
      onAddModule(newModule, coefficient);
      setNewModule("");
      setCoefficient(1);
    }
  };
  return (
    <div>
      <h1>Add Modules to {major.name} </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Module Name"
          value={newModule}
          onChange={(e) => setNewModule(e.target.value)}
        />
        <input
          type="number"
          placeholder="Coefficient"
          value={coefficient}
          onChange={(e) => setCoefficient(e.target.value)}
        />
        <button type="submit">Add Module</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>

      <ul>
        {major.modules.map((mod, index) => (
          <li key={index}>
            {mod.module} - Coefficient: {mod.coefficient}
          </li>
        ))}
      </ul>

      {/* <input
        required
        value={newModule}
        onChange={(e) => setNewModule(e.target.value)}
        type="text"
        placeholder="Add a Module"
      />

      <input
        required
        value={coeficient}
        onChange={(e) => setCoefficient(e.target.value)}
        type="number"
        placeholder="Coefficient"
      />

      <button onClick={handleSubmit}>Add Module</button>
      <button onClick={handleDelete}>Delete</button>

      <ul>
        {modules.map((module, index) => (
          <li key={index}>
            {" "}
            module {index + 1}: {module.name}    Coe: {module.coefficient}{" "}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Modules;
