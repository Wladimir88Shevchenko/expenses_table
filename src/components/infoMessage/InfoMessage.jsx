import React from 'react'
import { StyledInfoMessage } from './styled'
import dontKnowIcon from '../../media/icons/dont-know-icon.png'

const InfoMessage = () => {
	return (
		<StyledInfoMessage>
			<img src={dontKnowIcon} alt='dont know icon' />
			<h3>Your costs list is empty</h3>
			<h5>You can choose another year in filter or add new cost</h5>
		</StyledInfoMessage>
	)
}

export default InfoMessage
