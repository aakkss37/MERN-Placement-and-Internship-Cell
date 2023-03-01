import Student from "../model/studentSchema.js"


export const alreadyLogedIn = async(req, resp)=> {
	// console.log(req.student)
	try {
		const student = await Student.findOne({email: req.student.email});
		// console.log(student)
		return resp.status(200).json({
			name: student.name,
			email: student.email,
			picture: student.picture,
			cgpa: student.cgpa,
			activeBack: student.activeBack,
			phone: student.phone,
		})
	} catch (error) {
		return resp.status(404).json({ msg: error.message });
	}
}