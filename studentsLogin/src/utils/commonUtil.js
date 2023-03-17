export const getAccessToken = () => {
	return sessionStorage.getItem("accessToken");
}

export const getType = (value, body) => {
	if (value.query) {
		// console.log("query ==> ", value.query)
		if (typeof body === "object") {
			return { query: body._id }
		}
		else {
			// console.log("returning ==> ", body)
			return { query: body }
		}
	}
	else if (value.params) {
		// console.log("params -> true")
		return { params: body }
	}
	return {}
}


export const formatDate = (date) => {
	// get the day, month, and year from the Date object
	const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	const day = date.getDate();
	const month = date.getMonth() 
	const year = date.getFullYear();
	// format the date as a string in the desired format
	const formattedDate = `${monthsList[month]}/${day.toString().padStart(2, '0')}/${year.toString()}`;
	return formattedDate
}