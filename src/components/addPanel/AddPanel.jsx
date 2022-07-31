import React, { useState } from 'react'
import ModalWindow from '../modalWindow/ModalWindow'
import AddForm from './AddForm'
import EnterButton from './EnterButton'
import { StyledAddPanel } from './styled'

const AddPanel = () => {
	const [showForm, setShowForm] = useState(false)

	const toggleFormVisibility = () => {
		setShowForm(prevShowValue => !prevShowValue)
	}

	return(
		<StyledAddPanel >
			<EnterButton
				toggleFormVisibility={toggleFormVisibility}
			/>
			<ModalWindow
				active={showForm}
				toggleFormVisibility={toggleFormVisibility}
			>
				<AddForm
					toggleFormVisibility={toggleFormVisibility}
				/>
			</ModalWindow>
		</StyledAddPanel>
	)
}

export default AddPanel
