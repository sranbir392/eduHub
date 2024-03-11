const mongoose=require("mongoose");
const SchemaCourse=new mongoose.Schema({
    title: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    instructor: { type: String, required: true },
    description: { type: String, required: true }
    
})

const CourseModel=mongoose.model("course",SchemaCourse);

module.exports={CourseModel}