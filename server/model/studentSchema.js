import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
	studentID: { type: String, required: true, unique: true },
	gender: {type: String, required: true},
	// personalEmail: {type: String: required: }
})

const StudentData = mongoose.model('StudentData', studentSchema);

export default StudentData;