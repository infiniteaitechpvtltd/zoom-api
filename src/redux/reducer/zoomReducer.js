import * as actionTypes from '../constant/zoom';

let link = [
  {
    id: 0,
    meetingNumber: "74170245590",
    passWord: "9cvMmc",
    role: 1,
    title: "sdvfgwerg",
  },

  // {
  //   id: 1,
  //   meetingNumber: "73050531999",
  //   passWord: "719rju",
  //   role: 1,
  //   title: "learning2",
  // },
  // {
  //   id: 2,
  //   meetingNumber: "73050531999",
  //   passWord: "719rju",
  //   role: 1,
  //   title: "learning3",
  // },
  // {
  //   id: 3,
  //   meetingNumber: "73050531999",
  //   passWord: "719rju",
  //   role: 1,
  //   title: "learning4",
  // },
];

export const zoomReducer = (state = { product: link }, action) => {
  switch (action.type) {
    case actionTypes.ADD_link:
      return {
        product: [action.payload, ...state.product],
      };

   

    default:
      return state;
  }
};