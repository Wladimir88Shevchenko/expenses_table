import { useSelector } from 'react-redux'

const useSearch = (list) => {
	const value = useSelector(state => state.searchSlice.searchValue)
	if(!value) {
		return list
	}
	const listFilteredBySearch = list.filter(cost => cost.title.toLowerCase().includes(value.toLowerCase()))
	return listFilteredBySearch
}

export default useSearch
