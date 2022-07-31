const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
	'August', 'September', 'October', 'November', 'December']

export const getDateParts = (dateMiliseconds) => {
	const fullDate = new Date(dateMiliseconds)
	const monthNumber = fullDate.getMonth()
	const month = monthList[monthNumber]
	const day = fullDate.getDate()
	const year = fullDate.getFullYear()
	return{
		day,
		month,
		year
	}
}
