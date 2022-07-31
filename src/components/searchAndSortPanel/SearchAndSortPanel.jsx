import React from 'react'
import Search from '../search/Search'
import SortSelector from '../sortSelector/SortSelector'
import { StyledSearchAndSortPanel } from './styled'

const SearchAndSortPanel = () => {
	return(
		<StyledSearchAndSortPanel>
			<Search />
			<SortSelector />
		</StyledSearchAndSortPanel>
	)
}

export default SearchAndSortPanel
