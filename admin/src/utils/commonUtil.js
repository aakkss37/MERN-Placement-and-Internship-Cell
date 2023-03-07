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
