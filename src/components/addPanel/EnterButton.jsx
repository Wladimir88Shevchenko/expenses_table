import React from 'react'
import { DarkBlueBtn } from '../../mainStyles/styled'
import { StyledEnterButton } from './styled'

const EnterButton = ({ toggleFormVisibility }) => {
	return (
		<StyledEnterButton>
			<DarkBlueBtn
				className='enterBtn'
				onClick={toggleFormVisibility}
			>Want to add new Cost</DarkBlueBtn>
		</StyledEnterButton>
	)
}

export default EnterButton
