import * as constant from "../constant/zoom";

export const addlink = (data) => async (dispatch, getState) => {
  try {
   

    dispatch({ type: constant.ADD_link, payload: data });
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
  }
};
