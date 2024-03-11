const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  creater: {
    type: String,
    required: true
  }
});


const AssignmentModel = mongoose.model('assignments', courseSchema);

module.exports = AssignmentModel;