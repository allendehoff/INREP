const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    // type: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;