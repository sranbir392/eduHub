const express = require("express");
const { PostSigup, PostLogin } = require("../allOtherPart/sign");
const {
  courseDetails,
  getCourse,
  studentcourse,
  studentGetcourse,
  scheduleLecture,
  getscheduleLecture,
  sprintplane,
  getsprintplane,
  assignmentgiven,
  getassignmentgiven,
  getCourseDelete,
  scheduleLectureDelete,
  assignmentgivendelete,
} = require("../allOtherPart/course");

const Router = express.Router();

Router.get("/", (req, res) => {
  res.send({ msg: "get data" });
});

Router.post("/signup", PostSigup);
Router.post("/login", PostLogin);
Router.post("/course", courseDetails);
Router.delete("/coursedelete", getCourseDelete);
Router.post("/student", studentcourse);
Router.get("/coursedetails", getCourse);
Router.get("/courseGetdetails", studentGetcourse);
Router.post("/schedule", scheduleLecture);
Router.delete("/scheduledelete", scheduleLectureDelete);
Router.post("/assignment", assignmentgiven);
Router.delete("/assignmentdelete", assignmentgivendelete);
Router.post("/sprint", sprintplane);
Router.get("/getsprint", getsprintplane);
Router.get("/getschedule", getscheduleLecture);
Router.get("/getassignment", getassignmentgiven);


module.exports = { Router };
