import * as actionType from "../constants/dispatchType.js";

export const saveLogedInStudentData = (studentData) => (dispatch) => {
	dispatch({ type: actionType.SAVE_LOGEDIN_STUDENT_DATA, payload: studentData })
}