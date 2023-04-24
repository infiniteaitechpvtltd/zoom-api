import * as actionTypes from "../constant/student";

let data = [
  {
    id: 0,
    meeting: [
      {
        id: 0,
        meetingNumber: "74170245590",
        passWord: "9cvMmc",
        role: 0,
        title: "sdvfgwerg",
      },
      // {
      //   id: 1,
      //   meetingNumber: "73050531999",
      //   passWord: "719rju",
      //   role: 0,
      //   title: "learning2",
      // },
    ],
    userEmail: "patels.monil@gmail.com",
    userName: "student1",
  },
  {
    id: 1,
    meeting: [
      {
        id: 0,
        meetingNumber: "74170245590",
        passWord: "9cvMmc",
        role: 0,
        title: "sdvfgwerg",
      },
    ],
    userName: "student2",
    userEmail: "patels.monil@gmail.com",
  },
  {
    id: 2,

    userName: "student3",
    userEmail: "patels.monil@gmail.com",
    meeting: [
      {
        id: 0,
        meetingNumber: "74170245590",
        passWord: "9cvMmc",
        role: 0,
        title: "sdvfgwerg",
      },
    ],
  },
];


export const studentReducer = (state = { student: data }, action) => {
  switch (action.type) {
    case actionTypes.ADD_STUDENT:
      return {
        student: [action.payload, ...state.product],
      };

    default:
      return state;
  }
};
