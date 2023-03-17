import Company from "../../model/CompanySchema.js";

export const addNewCompany = async(request, response) => {
	// console.log(request.body)
	try {
		const company = await Company.create(request.body)
		// console.log(company)
		response.status(200).json({ msg: "New company added sucessfully.", info: company});
	} catch (error) {
		response.status(500).json({ msg: "Error while adding new company."});
	}
}


export const getListedCompanyList = async(request, responce) => {
	try {
		const list = await Company.find();
		console.log(list)
	} catch (error) {
		responce.status(500).json({msg: "Something went wrong while fetching the company list"})
	}
}