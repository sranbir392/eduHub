import axios from "axios";
import {
  ASSIGNMENTDELETE,
  ASSIGNMENTGET,
  ASSIGNMENTPOST,
  DELETECOURSE,
  GETCOURSE,
  GETSCHEDULE,
  GETSPRINT,
  GETSTUDENTCOURSE,
  POSTCOURSE,
  SCHEDULE,
  STUDENTCOURSE,
  SignUpData,
} from "./actionType";
const url = "https://backend-idea-0bbp.onrender.com/";

export const signupPost = (el) => async (dispatch) => {
  const res = await axios.post(`${url}/signup`, el);
  dispatch({ type: SignUpData, payload: res.data });
};

export const loginData = (el) => async (dispatch) => {
  const res = await axios.post(`${url}/login`, el);
  dispatch({ type: SignUpData, payload: res.data });
};

export const courseData = (el) => async (dispatch) => {
  const res = await axios.get(`${url}/coursedetails`);
  dispatch({ type: GETCOURSE, payload: res.data });
};
export const courseDataPost = (el) => async (dispatch) => {
  const res = await axios.post(`${url}/course`, el);
  dispatch({ type: POSTCOURSE, payload: res.data });
};

export const courseDataDelete = (title) => async (dispatch) => {
  const res = await axios.delete(`${url}/coursedelete`, {
    headers: {
      title: title,
    },
  });
  dispatch({ type: DELETECOURSE, payload: res.data });
};

export const studentData = (el) => async (dispatch) => {
  const res = await axios.post(`${url}/student`, el);
  dispatch({ type: STUDENTCOURSE, payload: res.data });
};

export const GetstudentData = (el) => async (dispatch) => {
  const res = await axios.get(`${url}/courseGetdetails`, {
    headers: {
      email: el,
    },
  });

  dispatch({ type: GETSTUDENTCOURSE, payload: res.data });
};

export const GetscheduleData = () => async (dispatch) => {
  const res = await axios.get(`${url}/getschedule`);

  dispatch({ type: GETSCHEDULE, payload: res.data });
};
export const PostscheduleData = (el) => async (dispatch) => {
  const res = await axios.post(`${url}/schedule`, el);

  dispatch({ type: SCHEDULE, payload: res.data });
};
export const DeletescheduleData = (el) => async (dispatch) => {
  const res = await axios.delete(`${url}/scheduledelete`, {
    headers: {
      title: el,
    },
  });

  dispatch({ type: SCHEDULE, payload: res.data });
};
export const getSprintData = () => async (dispatch) => {
  const res = await axios.get(`${url}/getsprint`);

  dispatch({ type: GETSPRINT, payload: res.data });
};
export const getassignmentData = () => async (dispatch) => {
  const res = await axios.get(`${url}/getassignment`);

  dispatch({ type: ASSIGNMENTGET, payload: res.data });
};
export const PostassignmentData = (el) => async (dispatch) => {
  const res = await axios.post(`${url}/assignment`, el);

  dispatch({ type: ASSIGNMENTPOST, payload: res.data });
};
export const DeleteassignmentData = (title) => async (dispatch) => {
  const res = await axios.delete(`${url}/assignmentdelete`, {
    headers: {
      title: title,
    },
  });

  dispatch({ type: ASSIGNMENTDELETE, payload: res.data });
};
