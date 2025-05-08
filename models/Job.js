const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
  location: String,
  salary:Number,
  skills:String
});

module.exports = mongoose.model("Job", jobSchema);
