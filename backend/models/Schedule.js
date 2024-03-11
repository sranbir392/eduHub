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


const ScheduleModel = mongoose.model('schedule', courseSchema);

module.exports = ScheduleModel;