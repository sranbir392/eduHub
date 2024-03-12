const mongoose=require("mongoose");
const SchemaCourse=new mongoose.Schema({
    title: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    instructor: { type: String, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course', 
        required: false,
    }],
})

const StudentModel=mongoose.model("studentcourse",SchemaCourse);

module.exports={StudentModel}