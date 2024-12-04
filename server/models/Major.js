const mongoose = require("mongoose");

const MajorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    facultyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculties",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Majors", MajorSchema);
