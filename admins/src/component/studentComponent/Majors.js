import React, { useState } from "react";
import Modules from "./Modules";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoBagAdd } from "react-icons/io5";

function Majors() {
  const [majors, setMajors] = useState([]);
  const [newMajor, setNewMajor] = useState("");
  const [selectedMajor, setSelectedMajor] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMajor.trim() !== "") {
      setMajors([...majors, { name: newMajor, modules: [] }]);
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
    <div className="w-[80%] h-fit p-[3vh] mt-[15vh] flex flex-col items-center bg-emerald-50 rounded-2xl drop-shadow-2xl ">
      <h1 className="text-center font-bold text-[3.5vh] mb-[5vh]">
        New Majors
      </h1>

      <div className="flex justify-around items-center w-[100%] mt-[3vh] mb-[3vh]">
        <input
          type="text"
          placeholder="Add a Major"
          value={newMajor}
          onChange={(e) => setNewMajor(e.target.value)}
        />
        <div className="w-[30%] flex justify-between">
          <button
            className="w-[12.5vh] bg-teal-400 hover:bg-teal-500 font-bold py-2 px-4 rounded flex justify-between items-center"
            onClick={handleSubmit}
          >
            <IoBagAdd size="1.5rem" />
            Add
          </button>
          <button
            className="w-[12.5vh] bg-red-400 hover:bg-red-500 font-bold py-2 px-4 rounded flex justify-between items-center"
            onClick={handleDelete}
          >
            Delete
            <FaDeleteLeft size="2.6vh" color="white" />
          </button>
        </div>
      </div>

      <div className="w-[90%] ml-[7vh] my-[5vh] flex flex-wrap gap-3 items-center ">
        {majors.map((major, index) => (
          <div
            key={index}
            className="w-[30%] h-[6vh] flex justify-center items-center"
          >
            <button
              className="w-[60%] h-[6vh] bg-teal-400 hover:bg-teal-500 font-bold py-2 px-4 rounded flex justify-around items-center"
              onClick={() => handleSelectMajor(major)}
            >
              {major.name}
            </button>
          </div>
        ))}
      </div>

      <div className=" w-[100%] px-[5vh] my-[5vh] flex justify-center">
        {selectedMajor && (
          <Modules
            major={selectedMajor}
            onAddModule={handleAddModule}
            onClose={() => setSelectedMajor(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Majors;
