import Company from "../../model/CompanySchema.js";

export const addNewCompany = async (request, response) => {
	// console.log(request.body)
	try {
		const company = await Company.create(request.body)
		console.log(company)
		// get the day, month, and year from the Date object
		const day = company.Date.getDate();
		const month = company.Date.getMonth() + 1; // add 1 because getMonth() returns 0-based month
		const year = company.Date.getFullYear();
		// format the date as a string in the desired format
		const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year.toString()}`;

		const infoToSend = {
			id: company._id,
			companyName: company.companyName,
			listingDate: formattedDate,
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
			// get the day, month, and year from the Date object
			const day = item.Date.getDate();
			const month = item.Date.getMonth() + 1; // add 1 because getMonth() returns 0-based month
			const year = item.Date.getFullYear();
			// format the date as a string in the desired format
			const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year.toString()}`;

			return {
				id: item._id,
				companyName: item.companyName,
				listingDate: formattedDate,
				status: item.status
			}
		})
		console.log(infoToSend)
		response.status(200).json({ info: infoToSend });
	} catch (error) {
		response.status(500).json({ msg: error.message })
	}
}