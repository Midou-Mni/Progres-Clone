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

app.post("/send-name", (req, res) => {
  name = req.body.name;
  university = req.body.university;
  placeOfBirth = req.body.placeOfBirth;
  dateOfBirth = req.body.dateOfBirth;
  res.send({
    success: true,
    message: "Name received successfully",
    name,
    university,
    placeOfBirth,
    dateOfBirth,
  });
});

app.get("/get-name", (req, res) => {
  res.send({ name, university, placeOfBirth, dateOfBirth, field, year, semester, section, group });
});

// =====================================================
let field = "";
let year = "";
let semester = "";
let section = "";
let group = "";

app.post("/send-details", (req, res) => {
  field = req.body.field;
  year = req.body.year;
  semester = req.body.semester;
  section = req.body.section;
  group = req.body.group;
  res.send({
    success: true,
    message: "Details received successfully",
    field,
    year,
    semester,
    section,
    group,
  });
});

app.get("/get-details", (req, res) => {
  res.send({ section, group, field, year, semester });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
