import Company from "../../model/CompanySchema.js";

export const addNewCompany = async (request, response) => {
	// console.log(request.body)
	try {
		const company = await Company.create(request.body)
		console.log(company)
		const infoToSend = {
			id: company._id,
			companyName: company.companyName,
			listingDate: company.Date
		}
		response.status(200).json({ msg: "New company added sucessfully.", info: infoToSend });
	} catch (error) {
		response.status(500).json({ msg: "Error while adding new company." });
	}
}


export const getListedCompanyList = async (request, response) => {
	try {
		const list = await Company.find();
		const infoToSend = list.map(item => ({
			id: item._id,
			companyName: item.companyName,
			listingDate: item.Date
		}))
		console.log(infoToSend)
		response.status(200).json({ info: infoToSend });
	} catch (error) {
		response.status(500).json({ msg: error.message })
	}
}