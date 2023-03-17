import Company from "../../model/CompanySchema.js";
import { formatDate } from "../../utils/formatDate.js";
import { sendMail } from "../../utils/sendMail.js";

export const addNewCompany = async (request, response) => {
	// console.log(request.body)
	try {
		const company = await Company.create(request.body)
		console.log(company)
		
		sendMail()
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
		console.log(infoToSend)
		response.status(200).json({ info: infoToSend });
	} catch (error) {
		response.status(500).json({ msg: error.message })
	}
}