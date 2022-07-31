import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../store/slices/filterSlice'
import { StyledYearFilter } from './styled'

const YearFilter = () => {
	const currentYear = new Date().getFullYear()
	const startYear = currentYear - 6
	const filterCurrentValue = useSelector(state => state.filterSlice.filterValue)
	const dispatch = useDispatch()
	const yearsList = []
	for(let year = startYear; year < currentYear + 2; ++year) {
		yearsList.push(year)
	}
	yearsList.unshift('Years')

	const changeYear = (e) => {
		const newFilter = e.target.value
		dispatch(changeFilter({ filterValue: newFilter }))
	}

	return (
		<StyledYearFilter>
			<select
				id='yearsList'
				name='yearsList'
				value={filterCurrentValue}
				onChange={changeYear}
			>
				{
					yearsList.map(year => (
						<option
							key={year}
							value={year}
						>{year}</option>
					))
				}
			</select>
		</StyledYearFilter>
	)
}

export default YearFilter
