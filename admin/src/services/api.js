import axios from 'axios';
import { API_NOTIFICATION_MESSAGE, SERVICE_URL } from '../config/configConst';
// import { getAccessToken, getType } from '../utils/commenUtils';

/*
This code defines an API object that contains functions for making various types of HTTP 
requests using the Axios library. The axios.create() function is used to create an instance 
of the Axios client with a base URL and timeout value set.

The code then sets up request and response interceptors on the axios instance. 
These interceptors allow for processing of the request and response before they are 
sent or received. In this case, the request interceptor just returns the config unchanged, 
while the response interceptor uses the processResponse function to check the status code of 
the response and return an object with relevant information.

The processError function is used to handle errors that occur during the request. It checks 
whether the error is a response error or a request error and returns an object with relevant 
error information.

Finally, the code uses a for-of loop to iterate over the properties of the SERVICE_URL object 
and create corresponding properties on the API object. Each property on the API object is a 
function that takes 3 parameters: body, showUploadProgress, showDownloadProgress. This function 
creates an axios request with the url, method and data from the corresponding SERVICE_URL object 
property and also adds upload and download progress callbacks if they are provided.

It also exports API_NOTIFICATION_MESSAGE and SERVICE_URL constants which are used in the above functions.
*/

const SERVER_PORT = process.env.REACT_APP_SERVER_PORT

const API_URL = `http://localhost:${SERVER_PORT}`;
const axiosInstance = axios.create({ // axios.create --> You can create a new instance of axios with a custom config.
	baseURL: API_URL,
	timeout: 10000,
});


// Interceptors can be used to modify requests before they are sent. This can be useful for adding authentication headers, setting timeouts, or adding query parameters.
axiosInstance.interceptors.request.use(
	(config) => {
		// code eg: start gloable loader.
		// console.log("config url ==>> ", config.url);
		// console.log("config.TYPE.query ==>> ", config.TYPE.query);

		if (config.TYPE.query) {
			config.url = config.url + "?post_id=" + config.TYPE.query
		}
		else if (config.TYPE.params) {
			config.params = config.TYPE.params
		}
		// console.log("config url ==>> ", config.url);
		return config;
	},
	(error) => {
		console.log("could not make request --->", error);
		return Promise.reject(error);
	}
)

axiosInstance.interceptors.response.use(
	function (response) {
		// Stop global loader here
		// console.log("reasponce for api request ---> ", response)
		return processResponse(response);
	},
	function (error) {
		// Stop global loader here
		// console.log("reasponce for api request ---> ", error)
		return Promise.reject(processError(error));
	}
)

// // // // // // // // // // // // // // // // // // // // //
// It is a common responce for all the API's..
// if responce is sucess --> return {isSucess: true, data: object}
// if responce is failed --> return {isFailure: true, status: string, msg: string, code: statusCode->int}
const processResponse = (response) => {
	// rasponce sucessful
	if (response?.status === 200) {//The question mark (?) in "response?.status" is a JavaScript feature called optional chaining. It allows you to access a property of an object, even if that object or one of its parent objects is null or undefined. If the object is null or undefined, the expression returns undefined instead of throwing an error. In this case, it's checking if the "status" property of the "response" object is equal to 200, and if so, it will execute the code within the if statement.
		return {
			isSuccess: true,
			data: response.data
		}
	}
	// responce failed
	else {
		return {
			isFailure: true,
			status: response?.status,
			msg: response?.msg,
			code: response?.code
		}
	}
}



// Error can be of 3 type:-
const processError = (error) => {
	if (error.responce) {
		// 1. responce error --> request sent sucessfuly... request is received by server... server also has sent a responce sucessfuly... but the responce was other then 200 series  i.e. server couldn't process the request due to any reason
		console.log("Error in respoce ---> ", error.toJSON());
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.responceFailure,
			code: error.responce.status
		}
	}
	else if (error.request) {
		// 2. request error  --> request sent sucessfuly... but no responce was received.
		console.log("Error in request ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.requestFailuer,
			code: ""
		}
	}
	else {
		// 3. network error  --> couldn't make request(reason can be any thing.. like connection loss..etc) OR something went wrong from client side.
		console.log("Error in network ---> ", error);
		return {
			isError: true,
			msg: API_NOTIFICATION_MESSAGE.networkError,
			code: ""
		}
	}
}



export const API = {};
/*
This is a JavaScript for...of loop that is used to iterate over the properties of the 
SERVICE_URLS object. Object.entries(SERVICE_URLS) returns an array of key-value pairs 
for the properties of the SERVICE_URLS object.
In each iteration, the loop assigns the current key-value pair to the variables key and 
value, respectively. The key variable will contain the name of the property, and the value 
variable will contain the value associated with that property.
For example, on the first iteration, key would be "userLogin" and value would be 
{ url: '/login', method: 'POST' }. On the second iteration, key would be "userSignup" 
and value would be { url: '/signup', method: 'POST' }, and so on.
*/
for (const [key, value] of Object.entries(SERVICE_URL)) {
	API[key] = (body, showUploadProgress, showDownloadProgress) => {  // ---> function creates an axios request
		return axiosInstance({
			url: value.url,
			method: value.method,
			data: body,
			responseType: value.responceType,
			// headers: {
			// 	authorization: getAccessToken()
			// },
			// TYPE: getType(value, body),
			onUploadProgress: (ProgressEvent) => {
				if (showUploadProgress) {
					let percentComplete = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
					showUploadProgress(percentComplete);
				}
			},
			onDownloadProgress: (ProgressEvent) => {
				if (showDownloadProgress) {
					let percentComplete = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total);
					showDownloadProgress(percentComplete)
				}
			}
		})
	}
}

// console.log(API)
