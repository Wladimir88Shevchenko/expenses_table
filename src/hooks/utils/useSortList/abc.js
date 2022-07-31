
// TYPE CAN BE: 'reverse' OR 'simple'
const reverseOrSimpleSort = (list, type) => {
	const sortedList = [...list].sort((x, y) => {
		const xTitle = x.title.toLowerCase()
		const yTitle = y.title.toLowerCase()
		if(type === 'reverse') {
			if(yTitle > xTitle) {
				return 1
			}
			return -1
		}
		if(yTitle < xTitle) {
			return 1
		}
		return -1
	})
	return sortedList
}

export const abc = (list) => {
	return reverseOrSimpleSort(list, 'simple')
}

export const abcReverse = (list) => {
	return reverseOrSimpleSort(list, 'reverse')
}
