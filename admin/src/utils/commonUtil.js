import { faker } from '@faker-js/faker';

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
	const newDate = new Date(date);
	const monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	const day = newDate.getDate();
	const month = newDate.getMonth()
	const year = newDate.getFullYear();
	// format the date as a string in the desired format
	const formattedDate = `${monthsList[month]} | ${day.toString().padStart(2, '0')} | ${year.toString()}`;
	return formattedDate
}

export const generateFakeData = () => {
	const rows = []
	const departments = ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'];
	const names = [];
	for (let i = 0; i < 200; i++) {
		names.push(faker.name.firstName())
	}
	

	for (let i = 1; i <= 200; i++) {
		const departmentsRandomIndex = Math.floor(Math.random() * departments.length);
		rows.push({
			id: `20CSU${i.toString().padStart(3, '0')}`,
			Name: names[i-1],
			Department: departments[departmentsRandomIndex],
			CGPA: (Math.random() * 10).toFixed(1),
			phone: Math.floor(Math.random() * 10000000000),
		});
	}

	return rows
}