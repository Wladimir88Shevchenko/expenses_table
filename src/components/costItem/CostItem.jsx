import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCost } from '../../store/slices/costsSlice'
import { DeleteButtonIcon } from '../../media/icons/index'
import { convertNumberToBeautifulString } from '../../utils/numbersManipulation'
import { StyledCostItem } from './styled'
import { getDateParts } from './utils'


const CostItem = (props) => {
	const { title, date, price, unicalId } = props

	const { day, month, year } = getDateParts(date)

	const dispatch = useDispatch()

	const deleteCost = () => {
		dispatch(removeCost({ id: unicalId }))
	}

	const priceWithSpaces = convertNumberToBeautifulString(price)

	return(
		<StyledCostItem
			className='costItem'
		>
			<div className='dateBox'>
				{day} {month} {year}
			</div>
			<div className='titleAndPriceBox'>
				<div className='titleLine'>
					{title}
				</div>
				<div className='priceLine'>
					{priceWithSpaces} $
				</div>
			</div>
			<div className='deleteBlock'>
				<DeleteButtonIcon
					onClick={deleteCost}
				/>
			</div>
		</StyledCostItem>
	)
}

export default CostItem
