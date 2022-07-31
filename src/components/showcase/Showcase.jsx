import React from 'react'
import CostList from '../costList/CostList'
import { StyledShowcase } from './styled'

const Showcase = ({ costsList }) => {
	return(
		<StyledShowcase>
			<CostList
				costsList={costsList}
			/>
		</StyledShowcase>
	)
}

export default Showcase
