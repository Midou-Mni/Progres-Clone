import React, { useState, useEffect } from "react";
import Assessment from "./studentComponent/Assessment";

function ToFill() {
  const [field, setField] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [group, setGroup] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch("http://192.168.1.6:5000/get-name");
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

  const [showAssessment, setShowAssessment] = useState(false);

  const handleShowAssessment = () => {
    setShowAssessment((prev) => !prev);
  };

  return (
    <div className="fill">
      <header>
        <p>Field: <strong>{field}</strong></p>
        <p>Year: <strong>{year}</strong></p>
        <p>Semester: <strong>{semester}</strong></p>
        <p>Section: <strong>{section}</strong></p>
        <p>Group: <strong>{group}</strong></p>
      </header>

      <div className="btns">
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
  </div>
  );
}

export default ToFill;
