import React, { useState } from "react";
import { FaUserGraduate, FaMoon, FaUniversity } from "react-icons/fa";
import { RiInputField } from "react-icons/ri";

export default function Navbar({
  showAddStudent,
  setShowAddStudent,
  showMajors,
  setShowMajors,
}) {
  const handleShowAddStudent = () => {
    setShowAddStudent((prevShowAddStudent) => !prevShowAddStudent);
    setShowMajors(false);
  };

  const handleShowMajors = () => {
    setShowMajors((prevShowMajors) => !prevShowMajors);
    setShowAddStudent(false);
  };

  return (
    <div className="fixed top-0 w-full h-[8vh] m-0 z-[1000] bg-gray-100 shadow-md flex justify-center items-center">
      <div className="w-[80%] h-[7vh] pl-[5vh] pr-[5vh] flex items-center">
        <button className="mr-[7vh] w-[17vh] bg-transparent text-black text-[1.8vh] font-[600] flex flex-row justify-around items-center">
          <FaUniversity size="3vh" />
          New Unversity
        </button>

        <button
          onClick={handleShowMajors}
          className="mr-[7vh] w-[17vh] bg-transparent text-black text-[1.8vh] font-[600] flex flex-row justify-around items-center"
        >
          <RiInputField size={"3vh"} />
          New Major
        </button>

        <button
          onClick={handleShowAddStudent}
          className="w-[17vh] bg-transparent text-black text-[1.8vh] font-[600] flex flex-row justify-around items-center"
        >
          <FaUserGraduate size="3vh" />
          New Student
        </button>
      </div>

      <div className="w-[20%] h-[7vh] flex items-center justify-end">
        <button className="w-[5vh] mr-[5vh] rounded-full bg-transparent text-black text-[1.8vh] font-[600] flex flex-row justify-around items-center">
          <FaMoon size="3vh" />
        </button>
      </div>
    </div>
  );
}
