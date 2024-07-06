import React, { useState } from "react";

function Assessment() {
  const [module1, setModule1] = useState("");
  const [module2, setModule2] = useState("");
  const [module3, setModule3] = useState("");
  const [module4, setModule4] = useState("");
  const [module5, setModule5] = useState("");
  const [tpModule1, setTpModule1] = useState("");
  const [tpModule2, setTpModule2] = useState("");
  const [examModule1, setExamModule1] = useState("");
  const [examModule2, setExamModule2] = useState("");
  const [examModule3, setExamModule3] = useState("");
  const [examModule4, setExamModule4] = useState("");
  const [examModule5, setExamModule5] = useState("");

  const [avgModule1, setAvgModule1] = useState("");
  const [avgModule2, setAvgModule2] = useState("");
  const [avgModule3, setAvgModule3] = useState("");
  const [avgModule4, setAvgModule4] = useState("");
  const [avgModule5, setAvgModule5] = useState("");

  const [average, setAverage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/send-assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        module1,
        module2,
        module3,
        module4,
        module5,
        tpModule1,
        tpModule2,
        examModule1,
        examModule2,
        examModule3,
        examModule4,
        examModule5,
        avgModule1,
        avgModule2,
        avgModule3,
        avgModule4,
        avgModule5,
        average,
      }),
    });
    const data = await response.json();
    if (data.success) {
      console.log("sent successfully");
      console.log(data);
    }

    calculateAverage();
  };

  const calculateAverage = () => {
    const m1 = Number(module1) || 0;
    const tp1 = Number(tpModule1) || 0;
    const exam1 = Number(examModule1) || 0;
    const m1Average = Number(((m1 + tp1) / 2) * 0.4 + exam1 * 0.6) || 0;
    setAvgModule1(m1Average.toFixed(2));

    const m2 = Number(module2) || 0;
    const tp2 = Number(tpModule2) || 0;
    const exam2 = Number(examModule2) || 0;
    const m2Average = Number(((m2 + tp2) / 2) * 0.4 + exam2 * 0.6) || 0;
    setAvgModule2(m2Average.toFixed(2));

    const m3 = Number(module3) || 0;
    const exam3 = Number(examModule3) || 0;
    const m3Average = Number(m3 * 0.4 + exam3 * 0.6) || 0;
    setAvgModule3(m3Average.toFixed(2));

    const m4 = Number(module4) || 0;
    const exam4 = Number(examModule4) || 0;
    const m4Average = Number(m4 * 0.4 + exam4 * 0.6) || 0;
    setAvgModule4(m4Average.toFixed(2));

    const m5 = Number(module5) || 0;
    const exam5 = Number(examModule5) || 0;
    const m5Average = Number(m5 * 0.4 + exam5 * 0.6) || 0;
    setAvgModule5(m5Average.toFixed(2));

    const modules = [
      (((m1 + tp1) / 2) * 0.4 + exam1 * 0.6) * 4,
      (((m2 + tp2) / 2) * 0.4 + exam2 * 0.6) * 3,
      (m3 * 0.4 + exam3 * 0.6) * 3,
      (m4 * 0.4 + exam4 * 0.6) * 2,
      (m5 * 0.4 + exam5 * 0.6) * 2,
    ];
    const total = modules.reduce((acc, curr) => acc + curr, 0);
    console.log(total);
    const avg = total / 14;
    setAverage(avg.toFixed(2));
  };

  return (
    <div className="Assessment">
      <section className="td">
        <h1>TD's: </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <h3>Module 1</h3>
              <input
                className="input"
                value={module1}
                onChange={(e) => setModule1(e.target.value)}
                type="number"
                placeholder="Module 1"
              />
            </label>

            <label>
              <h3>Module 2</h3>
              <input
                className="input"
                value={module2}
                onChange={(e) => setModule2(e.target.value)}
                type="number"
                placeholder="Module 2"
              />
            </label>

            <label>
              <h3>Module 3</h3>
              <input
                className="input"
                value={module3}
                onChange={(e) => setModule3(e.target.value)}
                type="number"
                placeholder="Module 3"
              />
            </label>

            <label>
              <h3>Module 4</h3>
              <input
                className="input"
                value={module4}
                onChange={(e) => setModule4(e.target.value)}
                type="number"
                placeholder="Module 4"
              />
            </label>

            <label>
              <h3>Module 5</h3>
              <input
                className="input"
                value={module5}
                onChange={(e) => setModule5(e.target.value)}
                type="number"
                placeholder="Module 5"
              />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="tp">
        <h1>TP's: </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <h3>Module 1</h3>
              <input
                className="input"
                value={tpModule1}
                onChange={(e) => setTpModule1(e.target.value)}
                type="number"
                placeholder="Module 1"
              />
            </label>

            <label>
              <h3>Module 2</h3>
              <input
                className="input"
                value={tpModule2}
                onChange={(e) => setTpModule2(e.target.value)}
                type="number"
                placeholder="Module 2"
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="exam">
        <h1>Exams: </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <h3>Module 1</h3>
              <input
                className="input"
                value={examModule1}
                onChange={(e) => setExamModule1(e.target.value)}
                type="number"
                placeholder="Module 1"
              />
            </label>

            <label>
              <h3>Module 2</h3>
              <input
                className="input"
                value={examModule2}
                onChange={(e) => setExamModule2(e.target.value)}
                type="number"
                placeholder="Module 2"
              />
            </label>

            <label>
              <h3>Module 3</h3>
              <input
                className="input"
                value={examModule3}
                onChange={(e) => setExamModule3(e.target.value)}
                type="number"
                placeholder="Module 3"
              />
            </label>

            <label>
              <h3>Module 4</h3>
              <input
                className="input"
                value={examModule4}
                onChange={(e) => setExamModule4(e.target.value)}
                type="number"
                placeholder="Module 4"
              />
            </label>

            <label>
              <h3>Module 5</h3>
              <input
                className="input"
                value={examModule5}
                onChange={(e) => setExamModule5(e.target.value)}
                type="number"
                placeholder="Module 5"
              />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </section>
      {average && (
        <section className="average">
          <h1>Average:</h1>
          <p>{average}</p>
        </section>
      )}
    </div>
  );
}

export default Assessment;
