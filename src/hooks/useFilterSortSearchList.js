import useFilterList from './useFilterList'
import useSearch from './useSearch'
import useSortList from './useSortList'

const useFilterSortSearchList = () => {
	const filteredList = useFilterList()
	const sortedList = useSortList(filteredList)
	const sreachedList = useSearch(sortedList)
	return sreachedList
}

export default useFilterSortSearchList
