const mongoose = require("mongoose");

const TeachersSchema = new mongoose.Schema(
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
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Teachers", TeachersSchema);