const mongoose=require("mongoose");
const SchemaSignUp=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:["user","admin"], default:"user"},
    
})

const SignUpModel=mongoose.model("signup",SchemaSignUp);

module.exports={SignUpModel}