import Student from "../../model/studentSchema.js"


export const alreadyLogedIn = async(req, resp)=> {
	// console.log(req.student)
	try {
		const student = await Student.findOne({email: req.student.email});
		console.log("already logedin --->>>>>>>>>> ",student)
		return resp.status(200).json(student)
	} catch (error) {
		return resp.status(404).json({ msg: error.message });
	}
}