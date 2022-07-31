import React from 'react'
import { StyledModalWindow } from './styled'

const ModalWindow = ({ active, toggleFormVisibility, children }) => {
	return (
		<StyledModalWindow
			onClick={toggleFormVisibility}
			active={active}
		>
			<div
				className='content'
				onClick={e => e.stopPropagation()}
			>
				{children}
			</div>
		</StyledModalWindow>
	)
}

export default ModalWindow
