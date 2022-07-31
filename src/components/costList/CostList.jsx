import React from 'react'
import CostItem from '../costItem/CostItem'
import { StyledCostList } from './styled'
import InfoMessage from '../infoMessage/InfoMessage'

const CostList = ({ costsList }) => {
	const doWeHaveData = costsList?.length

	return(
		<StyledCostList>
			{
				doWeHaveData ?
					costsList.map(costItemData => (
						<CostItem
							key={costItemData.unicalId}
							{...costItemData}
						/>
					)) :
					<InfoMessage />
			}
		</StyledCostList>
	)
}

export default CostList
