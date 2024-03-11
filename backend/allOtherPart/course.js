const ScheduleModel = require("../models/Schedule");
const Week = require("../models/SprintPlane");
const AssignmentModel = require("../models/assignment");
const { CourseModel } = require("../models/courseModel");
const { StudentModel } = require("../models/studentmodel");

exports.courseDetails = async(req, res) => {
  const data=await CourseModel(req.body);
  console.log(req.body)
  data.save();
  res.send({data})
};

exports.getCourse = async (req, res) => {
  const data = await CourseModel.find();
  res.send({ msg: data });
};

exports.getCourseDelete = async (req, res) => {
  const { title } = req.headers;
  const data = await CourseModel.deleteOne({title});
  res.send({ msg:data });
};

exports.studentcourse = async (req, res) => {
  const data = await StudentModel(req.body);
  data.save();
  res.send({ msg: data });
};



exports.studentGetcourse = async (req, res) => {
  const { email } = req.headers;
  const data = await StudentModel.findOne({ email });
  console.log(data);
  res.send({ msg: data });
};

exports.scheduleLecture = async (req, res) => {
  const data = await ScheduleModel(req.body);
  data.save();
  res.send({ msg: data });
};

exports.scheduleLectureDelete = async (req, res) => {
  const {title} = req.headers;
  const data=await ScheduleModel.deleteOne({title})
  
  res.send({ msg: data });
};

exports.assignmentgiven = async (req, res) => {
  const data = await AssignmentModel(req.body);
  data.save();
  res.send({ msg: data });
};
exports.assignmentgivendelete = async (req, res) => {
  const{title}=req.headers;
  const data = await AssignmentModel.deleteOne({title});
  
  res.send({ msg: data });
};

exports.sprintplane = async (req, res) => {
  const data = await Week(req.body);
  data.save();
  res.send({ msg: data });
};

exports.getscheduleLecture = async (req, res) => {
  const data = await ScheduleModel.find();

  res.send({ msg: data });
};

exports.getassignmentgiven = async (req, res) => {
  const data = await AssignmentModel.find();

  res.send({ msg: data });
};

exports.getsprintplane = async (req, res) => {
  const data = await Week.find();

  res.send({ msg: data });
};
