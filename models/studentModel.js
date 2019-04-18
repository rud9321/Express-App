const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  balance: {
    type: Number,
    default: 0
  }
});

studentSchema.plugin(timestamp);
const Student = mongoose.model("student", studentSchema, "student");
module.exports = Student;
