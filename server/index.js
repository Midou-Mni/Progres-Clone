const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error: ", err));

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const University = require("./models/Universities.js");
const FacultyModel = require("./models/Faculty.js");
const MajorModel = require("./models/Major.js");
const YearModel = require("./models/Years.js");

app.post("/api/login", async (req, res) => {
  const { matricule, password } = req.body;
  try {
    const faculty = await FacultyModel.findOne({ matricule });
    if (!faculty) {
      return res.status(404).json({ error: "Faculty not found." });
    }
    if (faculty.password !== password) {
      return res.status(401).json({ error: "Invalid password." });
    }

    res.status(200).json({ id: faculty._id, name: faculty.name });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});

app.post("/api/universities", async (req, res) => {
  console.log(
    "name: " +
      req.body.univName +
      " matricule: " +
      req.body.univMatricule +
      " password: " +
      req.body.univPassword +
      " phoneNumber: " +
      req.body.univPhoneNumber +
      " email: " +
      req.body.univEmail +
      " website: " +
      req.body.univWebsite +
      " location: " +
      req.body.univLocation
  );
  const {
    univName,
    univMatricule,
    univPassword,
    univPhoneNumber,
    univEmail,
    univWebsite,
    univLocation,
  } = req.body;
  try {
    const existingUniversity = await University.findOne({
      $or: [
        { name: univName },
        { matricule: univMatricule },
        { phoneNumber: univPhoneNumber },
        { email: univEmail },
        { website: univWebsite },
      ],
    });
    if (existingUniversity) {
      return res.status(400).json({
        error:
          "University with this name, email, matricule, phone number or website already exists.",
      });
    }
    const newUniversity = new University({
      name: univName,
      matricule: univMatricule,
      password: univPassword,
      phoneNumber: univPhoneNumber,
      email: univEmail,
      website: univWebsite,
      location: univLocation,
    });

    const savedUniversity = await newUniversity.save();
    res.status(201).json(savedUniversity);
  } catch (error) {
    console.error("Error saving university:", error);
    res.status(500).json(error);
  }
});
app.get("/api/universities", async (req, res) => {
  try {
    const universities = await University.find();
    res.status(200).json(universities);
  } catch (error) {
    res.status(500).json({ error: "Error fetching universities." });
  }
});
app.get("/api/universities/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const university = await University.findById(id);
    if (!university) {
      return res.status(404).json({ error: "University not found." });
    }
    res.status(200).json(university);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});

app.get("/api/faculties", async (req, res) => {
  const universityId = req.query.universityId;
  if (!universityId) {
    return res.status(400).json({ error: "universityId is required." });
  }
  try {
    const faculties = await FacultyModel.find({ universityId });
    res.status(200).json(faculties);
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});
app.post("/api/faculties", async (req, res) => {
  try {
    const {
      name,
      matricule,
      password,
      phoneNumber,
      email,
      website,
      universityId,
    } = req.body;

    const newFaculty = new FacultyModel({
      name,
      email,
      phoneNumber,
      matricule,
      password,
      website,
      universityId,
    });

    const savedFaculty = await newFaculty.save();
    res.status(201).json(savedFaculty);
  } catch (error) {
    console.error("Error saving faculty:", error);
    res.status(500).json({ error: "Error saving faculty." });
  }
});
app.get("/api/faculties/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const faculty = await FacultyModel.findById(id);
    if (!faculty) {
      return res.status(404).json({ error: "Faculty not found." });
    }
    res.status(200).json(faculty);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});

app.get("/api/majors", async (req, res) => {
  const facultyId = req.query.facultyId;

  if (!facultyId) {
    return res.status(400).json({ error: "facultyId is required." });
  }

  try {
    const majors = await MajorModel.find({ facultyId });
    res.status(200).json(majors);
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});
app.post("/api/majors", async (req, res) => {
  console.log("Received data for new major:", req.body);
  try {
    const { name, website, facultyId } = req.body;

    const newMajor = new MajorModel({
      name,
      website,
      facultyId,
    });

    const savedMajor = await newMajor.save();
    res.status(201).json(savedMajor);
  } catch (error) {
    console.error("Error saving major:", error);
    res.status(500).json({ error: "Error saving major." });
  }
});

app.get("/api/years", async (req, res) => {
  const majorId = req.query.majorId;
  if (!majorId) {
    return res.status(400).json({ error: "majorId is required." });
  }
  try {
    const years = await YearModel.find({ majorId });
    res.status(200).json(years);
  } catch (error) {
    console.error("Database error: ", error);
    res.status(500).json({ error: "Internal server error. Please try again." });
  }
});
app.post("/api/addYears", async (req, res) => {
  console.log("Received data for new year:", req.body);
  try {
    const { year, majorId } = req.body;
    const existingYear = await YearModel.findOne({ year, majorId });
    if (existingYear) {
      return res.status(400).json({
        error: "Tihs year is already exists in this major.",
      });
    }
    const newYear = new YearModel({
      year,
      majorId,
    });
    const savedYear = await newYear.save();
    res.status(201).json(savedYear);
  } catch (error) {
    console.error("Error saving year:", error);
    res.status(500).json({ error: "Error saving year." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});