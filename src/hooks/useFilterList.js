import { useSelector } from 'react-redux'

const filterByYear = (list, year) => {
	const doWeHaveYearsFilter = !isNaN(year)
	const doWeHaveData = list?.length
	const doWeNeedFilter = doWeHaveYearsFilter && doWeHaveData
	if(doWeNeedFilter) {
		const filteredList = list.filter(({ date }) => {
			const costYear = new Date(date).getFullYear()
			const isItNeededCost = costYear === year
			return isItNeededCost
		})
		return filteredList
	}
	return list
}

const useFilterList = () => {
	const costsListData = useSelector(state => state.costsSlice.costsList)
	const yearsFilterValue = useSelector(state => +state.filterSlice.filterValue)
	const filteredList = filterByYear(costsListData, yearsFilterValue)
	return filteredList
}

export default useFilterList
