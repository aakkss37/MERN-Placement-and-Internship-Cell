import * as actionType from "../constants/dispatchType.js";

export const studentLoginReducer = (state = null, action) => {
	switch (action.type) {
		case actionType.SAVE_LOGEDIN_STUDENT_DATA:
			state = action.payload;
			// console.log(state)
			return state;

		case actionType.REMOVE_LOGEDIN_STUDENT_DATA:
			state = null
			return state;
		
		default:
			return state;
	}
}