// API NOTIFICATION MESSAGES

export const API_NOTIFICATION_MESSAGE = {
	loading: {
		title: 'Loading...',
		message: 'Data is being loaded... Please wait',
	},
	success: {
		title: 'success',
		message: 'Data is successfuly loaded',
	},
	responceFailure: {
		title: 'ERROR',
		message: "Request sent sucessfuly... request is received by server... server also has sent a responce sucessfuly... but the responce was other then 200 series  i.e. server couldn't process the request due to any reason"
	},
	requestFailuer: {
		title: 'ERROR',
		message: "Request sent sucessfuly... but no responce was received."
	},
	networkError: {
		title: "ERROR",
		message: "Unble to connect wit the server. Please check your internet connection OR try again leter"
	}
};



// API SERVICE CALL
/*
Sample request:--->
apiService: {
	url: '/endPoint',
	method: 'POST/GET/PUT/PATCH/DELETE',
	params: 'true/false',
	query: 'true/false',
}
*/
export const SERVICE_URL = {
	
}