import Company from "../../model/CompanySchema"



export const getPlacementDriveList = async (request, response) => {
	try {
		const driveList = await Company.find()
		response.status(200).json(driveList.reverse())
	} catch (error) {
		response.status(400).json({ msg: error.message})
	}
} 