const mongoose = require('mongoose');

const weekSchema = new mongoose.Schema({
  week: {
    type: Number,
    required: true
  },
  topics: {
    type: [String],
    required: true
  },
  assignments: {
    type: [String],
    required: true
  },
  readings: {
    type: [String],
    required: true
  }
});

const Week = mongoose.model('Week', weekSchema);

module.exports = Week;
