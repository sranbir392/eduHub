import { GETSTUDENTCOURSE } from "./actionType";

const listStates = {
  emailData: [],
};

function reducer2(state = listStates, { type, payload }) {
  console.log(payload);
  switch (type) {
    case GETSTUDENTCOURSE:
      return { ...state, emailData: payload.msg };

    default:
      return state;
  }
}

export default reducer2;
