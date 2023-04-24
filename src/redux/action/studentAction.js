import * as constant from "../constant/student";

export const addstudent = (student) => async (dispatch, getState) => {
  try {
   
      dispatch({ type: constant.ADD_STUDENT, payload: student });
      
      
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
  }
};
