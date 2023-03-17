export const formatDate = (date)=> {
	// get the day, month, and year from the Date object
	const day = date.getDate();
	const month = date.getMonth() + 1; // add 1 because getMonth() returns 0-based month
	const year = date.getFullYear();
	// format the date as a string in the desired format
	const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year.toString()}`;
	return formattedDate
}