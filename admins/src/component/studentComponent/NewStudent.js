import React, { useState } from "react";

import File from "../file";

function NewStudent() {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [Submitted, setSubmitted] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/send-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, university, placeOfBirth, dateOfBirth }),
    });
    const data = await response.json();
    if (data.success) {
      console.log("Name sent successfully");
      console.log(data);
      setSubmitted(true);
    }
  };

  return (
      <div className="mt-[15vh]">
        {Submitted ? (
          <File />
        ) : (
          <div className="App">
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="mb-5">Add a Student</h1>
              <section>
                <label>
                  <p>Name: </p>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter student name"
                  />
                </label>
                <label>
                  <p>University: </p>
                  <input
                    required
                    type="text"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    placeholder="Enter the university"
                  />
                </label>
              </section>

              <section>
                <label>
                  <p>Place of Birth: </p>
                  <input
                    required
                    type="text"
                    value={placeOfBirth}
                    onChange={(e) => setPlaceOfBirth(e.target.value)}
                    placeholder="Place of Birth"
                  />
                </label>
                <label>
                  <p>Date of Birth: </p>
                  <input
                    required
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    placeholder="Date of Birth"
                  />
                </label>
              </section>

              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </div>
  );
}

export default NewStudent;
