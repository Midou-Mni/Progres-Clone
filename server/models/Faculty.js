const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    matricule: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    website: {
      type: String,
      required: true,
      unique: true,
    },
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Universities",
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculties", FacultySchema);
