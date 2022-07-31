
// TYPE CAN BE: 'reverse' OR 'simple'
// fieldTitle - title for field with number data
export const reverseOrSimpleNumberSort = (list, type, fieldTitle) => {
	const sortedList = [...list].sort((x, y) => {
		const xFieldValue = x[fieldTitle]
		const yFieldValue = y[fieldTitle]
		if(type === 'reverse') {
			return yFieldValue - xFieldValue
		}
		return xFieldValue - yFieldValue
	})
	return sortedList
}
