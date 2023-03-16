import mongoose from "mongoose";


const companySchema = new mongoose.Schema({
	companyName: {
		type: String,
		required: true
	},
	cgpa: {
		type: String,
		required: true
	},
	activeBack: {
		type: Boolean,
		required: true,
	},
	passoutYear: {
		type: String,
	},
	jobType: {
		type: String,
		required: true,
	},
	jobRole: {
		type: String,
		required: true,
	},
	
	CTC: {
		type: String,
		required: true,
	},
	jobLocation: {
		type: String,
		required: true,
	},
	responsibilities: {
		type: String,
		required: true,
	},
	requirement: {
		type: String,
		required: true,
	},
	aboutCompany: {
		type: String,
		required: true,
	},
	companyLogo: {
		type: String,
		required: true,
	},
	
	department: {
		type: Array,
		required: true,
	},
	Date: {
		type: Date,
		default: new Date()
	}
	
})

const Company = mongoose.model('Company', companySchema);

export default Company;