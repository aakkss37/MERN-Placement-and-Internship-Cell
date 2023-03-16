

export const addNewCompany = (request, response) => {
	console.log(request.body)
	response.status(200).json({ msg: "sucessfull receiver"});
}