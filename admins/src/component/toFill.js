import React, { useState, useEffect } from "react";
import Assessment from "./studentComponent/Assessment";
import Majors from "./studentComponent/Majors";

function ToFill() {
  const [field, setField] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch("http://localhost:5000/get-name");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setField(data.field);
      setYear(data.year);
      setSemester(data.semester);
      setSection(data.section);
      setGroup(data.group);
    };

    fetchName();
  }, []);

  const [showAssessment, setShowAssessment] = useState(true);
  const [showMajors, setShowMajors] = useState(false);

  const handleShowAssessment = () => {
    setShowAssessment(true);
    setShowMajors(false);
  };

 
  const handleShowMajors = () => {
    setShowMajors(true);
    setShowAssessment(false);
  };

  return (
    <div className="fill">
      <header>
        <p>Field: {field}</p>
        <p>Year: {year}</p>
        <p>Semester: {semester}</p>
        <p>Section: {section}</p>
        <p>Group: {group}</p>
      </header>

      <div className="btns">
        <button onClick={handleShowMajors}>Add Majors</button>
        <button onClick={() => alert("Fill Time Table soon")}>
          Time Table
        </button>
        <button onClick={() => alert("Fill Exam Schedule soon")}>
          Exam schedule
        </button>
        <button onClick={handleShowAssessment}>Assessment</button>
        <button onClick={() => alert("Fill Percentage soon")}>
          Percentage
        </button>
      </div>
       
      <div className="AssessmentCore">{showAssessment && <Assessment />}</div>
      <div className="MajorsCore">{showMajors && <Majors />}</div>
  </div>
  );
}

export default ToFill;
