import React from 'react'
import Select, { components } from 'react-select'
import { StyledSortSelector } from './styled'
import { ReactComponent as SortImage } from '../../media/icons/sort-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { changeSortValue } from '../../store/slices/sortSlice'

const SortImg = (
	props
) => {
	return (
		<components.DropdownIndicator {...props}>
			<SortImage />
		</components.DropdownIndicator>
	)
}

const SortSelector = () => {
	const currentValue = useSelector(state => state.sortSlice.sortValue)
	const dispatch = useDispatch()
	const options = [
		{ label: 'Money', value: 'money_up' },
		{ label: 'Money', value: 'money_down' },
		{ label: 'ABC', value: 'abc_up' },
		{ label: 'ABC', value: 'abc_down' },
		{ label: 'Date', value: 'date_up' },
		{ label: 'Date', value: 'date_down' }
	]

	const changeSortFunc = (sortValue) => {
		dispatch(changeSortValue(sortValue))
	}

	const getValue = () => {
		if(currentValue) {
			return options.find(sortValue => sortValue.value === currentValue)
		}
		return ''
	}

	return(
		<StyledSortSelector>
			<div className='selector'>
				<Select
					classNamePrefix='filterSelect'
					value={getValue()}
					options={options}
					components={{ DropdownIndicator: SortImg }}
					onChange={changeSortFunc}
				/>
			</div>
		</StyledSortSelector>
	)
}

export default SortSelector
