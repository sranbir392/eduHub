import { ASSIGNMENTGET, GETCOURSE, GETSCHEDULE, GETSPRINT, STUDENTCOURSE, SignUpData, logInData } from "./actionType";

const listStates = {
  signupData: [],
  getCourseData: [],
  studentCourseData: [],
  schedule:[],
  sprint:[],
  assignment:[],
  status: 0,
};

function reducer(state = listStates, { type, payload }) {
  console.log(payload);
  switch (type) {
    case SignUpData:
      return { ...state, signupData: payload.msg, status: payload.status };

    case logInData:
      return { ...state, signupData: payload.msg, status: payload };
    case GETCOURSE:
      return { ...state, getCourseData: payload.msg };
    case STUDENTCOURSE:
      return { ...state, studentCourseData: payload.msg };
    case GETSCHEDULE:
      return { ...state, schedule: payload.msg };
    case GETSPRINT:
      return { ...state, sprint: payload.msg };
    case ASSIGNMENTGET:
      return { ...state, assignment: payload.msg };

    default:
      return state;
  }
}

export default reducer;
