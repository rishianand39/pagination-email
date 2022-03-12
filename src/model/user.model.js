const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_Name: { type: String, required: true },
    last_Name: { type: String, required: true },
    email: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

const User = mongoose.model("user", userSchema);

module.exports = User;