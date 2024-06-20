import React, { useState, useEffect } from "react";

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
        <button onClick={() => alert("Fill Modules soon")}>Fill Modules</button>
        <button onClick={() => alert("Fill Time Table soon")}>Time Table</button>
        <button onClick={() => alert("Fill Exam Schedule soon")}>Exam schedule</button>
        <button onClick={() => alert("Fill Exam Grades soon")}>Exam Grades</button>
        <button onClick={() => alert("Fill Assessment soon")}>Assessment</button>
        <button onClick={() => alert("Fill Percentage soon")}>Percentage</button>
      </div>
    </div>
  );
}

export default ToFill;
