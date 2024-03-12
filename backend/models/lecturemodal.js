// lecture.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lectureSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course' 
    },
    
});

module.exports = mongoose.model('Lecture', lectureSchema);
