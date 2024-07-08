import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let name = "";
let university = "";
let placeOfBirth = "";
let dateOfBirth = "";

let field = "";
let year = "";
let semester = "";
let section = "";
let group = "";

app.post("/send-name", (req, res) => {
  name = req.body.name;
  university = req.body.university;
  placeOfBirth = req.body.placeOfBirth;
  dateOfBirth = req.body.dateOfBirth;

  field = req.body.field;
  year = req.body.year;
  semester = req.body.semester;
  section = req.body.section;
  group = req.body.group;
  res.send({
    success: true,
    message: "Name received successfully",
    name,
    university,
    placeOfBirth,
    dateOfBirth,
    field,
    year,
    semester,
    section,
    group,
  });
});

app.get("/get-name", (req, res) => {
  res.send({
    name,
    university,
    placeOfBirth,
    dateOfBirth,
    field,
    year,
    semester,
    section,
    group,
  });
});

// =====================================================
// ============================================================
let module1 = "";
let module2 = "";
let module3 = "";
let module4 = "";
let module5 = "";

let tpModule1 = "";
let tpModule2 = "";

let examModule1 = "";
let examModule2 = "";
let examModule3 = "";
let examModule4 = "";
let examModule5 = "";

let avgModule1 = "";
let avgModule2 = "";
let avgModule3 = "";
let avgModule4 = "";
let avgModule5 = "";

let average = "";

app.post("/send-assessment", (req, res) => {
  module1 = req.body.module1;
  module2 = req.body.module2;
  module3 = req.body.module3;
  module4 = req.body.module4;
  module5 = req.body.module5;

  tpModule1 = req.body.tpModule1;
  tpModule2 = req.body.tpModule2;

  examModule1 = req.body.examModule1;
  examModule2 = req.body.examModule2;
  examModule3 = req.body.examModule3;
  examModule4 = req.body.examModule4;
  examModule5 = req.body.examModule5;

  avgModule1 = req.body.avgModule1;
  avgModule2 = req.body.avgModule2;
  avgModule3 = req.body.avgModule3;
  avgModule4 = req.body.avgModule4;
  avgModule5 = req.body.avgModule5;

  average = req.body.average;

  res.send({
    success: true,
    message: "Assessment received successfully",
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
  });
});

app.get("/get-assessment", (req, res) => {
  res.send({
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
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
