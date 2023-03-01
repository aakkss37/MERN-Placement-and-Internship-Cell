import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import Student from '../model/studentSchema.js';







export const loginStudent = async (req, resp) => {
	// console.log("body ===>>> ",req.body);
	const access_token = req.body.access_token

	try {
		const responce = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
			headers: {
				"Authorization": `Bearer ${access_token}`,
				"Accept": 'application/json'
			}
		})
		// console.log("authanticated data==> ",responce.data)

		const student = await Student.findOne({ email: responce.data.email });
		if (student) {
			if (!student.everLogedIn) {
				const studentData = {
					googleID: responce.data.id,
					name: responce.data.name,
					picture: responce.data.picture,
					everLogedIn: true
				}
				const updateStudent = await Student.findOneAndUpdate({ email: responce.data.email }, studentData);
				updateStudent.save();
				// console.log("updated student ===> ", updateStudent)
				const student = await Student.findOne({ email: responce.data.email });
				// console.log("student =====>>>>>>>>> ", student)
				return resp.status(200).json({
					name: student.name,
					email: student.email,
					picture: student.picture,
					cgpa: student.cgpa,
					activeBack: student.activeBack,
					phone: student.phone,
				})
			}
			else{
				// console.log("student =====>>>>>>>>> ", student)
				return resp.status(200).json({
					name: student.name,
					email: student.email,
					picture: student.picture,
					cgpa: student.cgpa,
					activeBack: student.activeBack,
					phone: student.phone,
				})
			}

		} else {
			return resp.status(404).json({ msg: "User not found" });
		}

	} catch (error) {
		console.log(error.message)
		return resp.status(403).json({ msg: "invalid token" });
	}

}