import React, { useState, useEffect } from "react";
import "../App.css";

import ToFill from "./toFill";

function File() {
  // =======================================================
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch("http://localhost:5000/get-name");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setName(data.name);
      setUniversity(data.university);
      setPlaceOfBirth(data.placeOfBirth);
      setDateOfBirth(data.dateOfBirth);
    };

    fetchName();
  }, []);
  // =======================================================
  const [field, setField] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  const [group, setGroup] = useState("");

  const [Submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/send-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ section, group, field, year, semester }),
    });
    const data = await response.json();
    if (data.success) {
      console.log("sent successfully");
      console.log(data);
      setSubmitted(true);
    }
  };

  // =======================================================

  return (
    <div>
      <div className="allData">
        <h1>Student Details</h1>
        <div className="data">
          <header>
            <p>Name: {name}</p>
            <p>University Of: {university}</p>
            <p>Place of Birth: {placeOfBirth}</p>
            <p>Date of Birth: {dateOfBirth}</p>
          </header>
          {Submitted ? (
            <ToFill />
          ) : (
            <div className="details">
              <form onSubmit={handleSubmit} className="fieldContainer">
                <div className="field">
                  <input
                    required
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    type="text"
                    placeholder="Field"
                  />
                  <input
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    type="number"
                    placeholder="Year"
                  />
                  <input
                    required
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    type="number"
                    placeholder="semester"
                  />
                </div>

                <div className="group">
                  <input
                    required
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                    type="number"
                    placeholder="Group"
                  />
                  <input
                    required
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    type="number"
                    placeholder="Section"
                  />
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default File;
