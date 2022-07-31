import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchValue } from '../../store/slices/searchSlice'
import { StyledSearch } from './styled'

const Search = () => {
	const value = useSelector(state => state.searchSlice.searchValue)
	const dispatch = useDispatch()
	const onChange = (e) => {
		dispatch(changeSearchValue({
			searchValue: e.target.value
		}))
	}
	return (
		<StyledSearch>
			<input
				value={value}
				onChange={onChange}
				type='text'
				placeholder='Type keywords for search...'
			/>
		</StyledSearch>
	)
}

export default Search
