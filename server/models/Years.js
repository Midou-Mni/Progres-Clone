const mongoose = require("mongoose");

const YearSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  majorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculties",
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Years", YearSchema);
