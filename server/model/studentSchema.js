import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
	googleID: {
		type: String,
		unique: true,
	},
	name: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	picture: {
		type: String,
	},
	everLogedIn: {
		type: Boolean,
		required: true,
		default: false,
	},
	phone: String,
	cgpa: String,
	activeBack: Boolean,
})

const Student = mongoose.model('Student', studentSchema);

export default Student;