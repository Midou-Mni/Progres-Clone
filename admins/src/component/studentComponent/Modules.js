import React, { useState } from "react";

import { FaWindowClose } from "react-icons/fa";

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
    <div className="w-[100vh] h-fit p-[3vh] flex flex-col items-start bg-teal-50 rounded-2xl drop-shadow-2xl ">
      <div className="bg-slate-300 absolute mr-[6vh] top-[2vh] right-[-4vh]">
        <FaWindowClose
          size={"3vh"}
          color="black"
          onClick={onClose}
          cursor={"pointer"}
        />
      </div>
      <h1 className="w-[100%] text-center font-medium text-[2vh] mb-[5vh]">
        Add Modules to: {major.name}
      </h1>

      <form
        className="w-[100%] h-fit px-[3vh] pb-[3vh] flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-[100%] flex justify-center items-center">
          <input
            className="m-[1vh]"
            type="text"
            placeholder="Module Name"
            value={newModule}
            onChange={(e) => setNewModule(e.target.value)}
          />
          <input
            className="m-[1vh] w-[8%] text-center"
            type="number"
            placeholder="Coefficient"
            value={coefficient}
            onChange={(e) => setCoefficient(e.target.value)}
          />
          <button type="submit">Add Module</button>
        </div>
      </form>

      <div className="w-[100%] h-fit px-[3vh] pb-[3vh]">
        <div className="w-[100%] flex justify-evenly items-center mb-[3vh]">
          <h1 className="w-[25%] mr-[3vh] font-bold text-[2.5vh]">Module: </h1>
          <h1 className="w-[25%] font-semibold text-[2vh] text-center">
            Coefficient:{" "}
          </h1>
        </div>
        {major.modules.map((mod, index) => (
          <li key={index} className="w-[100%] flex justify-evenly items-center">
            <p className="w-[25%] font-normal text-[2.5vh] mr-[3vh]">
              {mod.module}
            </p>
            <p className="w-[25%] text-[2vh] text-center">{mod.coefficient}</p>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Modules;
