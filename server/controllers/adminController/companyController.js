import Company from "../../model/CompanySchema.js";
import { formatDate } from "../../utils/formatDate.js";
import { sendMail } from "../../utils/sendMail.js";

export const addNewCompany = async (request, response) => {
	// console.log(request.body)
	try {
		const company = await Company.create(request.body)
		console.log(company)

		sendMail(company)
			.then((result) => console.log('Email sent...', result))
			.catch((error) => console.log(error.message));

		const infoToSend = {
			id: company._id,
			companyName: company.companyName,
			listingDate: formatDate(company.Date),
			status: company.status
		}
		response.status(200).json({ msg: "New company added sucessfully.", info: infoToSend });
	} catch (error) {
		response.status(500).json({ msg: "Error while adding new company." });
	}
}


export const getListedCompanyList = async (request, response) => {
	try {
		const list = await Company.find();
		const infoToSend = list.map(item => {
			return {
				id: item._id,
				companyName: item.companyName,
				listingDate: formatDate(item.Date),
				status: item.status
			}
		})
		// console.log(infoToSend)
		response.status(200).json({ info: infoToSend });
	} catch (error) {
		response.status(500).json({ msg: error.message })
	}
}

export const getCompanyDetails = async (request, response) => {
	// console.log(request.query)
	const companyID = request.query.company_id
	try {
		const companyDetail = await Company.findById(companyID)
		console.log(companyDetail)
		response.status(200).json(companyDetail)
	} catch (error) {
		response.status(500).json(error.message)
	}
}

export const updateCompanyDetails = async (request, response) => {
	// console.log(request.body)
	try {
		const update = await Company.findByIdAndUpdate(request.body._id,
			{
				companyName: request.body.companyName,
				cgpa: request.body.cgpa,
				activeBack: request.body.activeBack,
				passoutYear: request.body.passoutYear,
				jobType: request.body.jobType,
				jobRole: request.body.jobRole,
				CTC: request.body.CTC,
				jobLocation: request.body.jobLocation,
				responsibilities: request.body.responsibilities,
				requirement: request.body.requirement,
				aboutCompany: request.body.aboutCompany,
				department: request.body.department,
			}
		)
		response.status(200).json({msg: "Update sucessfull", _id: update._id})
	} catch (error) {
		response.status(400).json(error.message)
	}
}


export const deleteCompanyDetails = async(request, response) => {
	console.log("request comming for ====>>>>", request.query.company_id)
}