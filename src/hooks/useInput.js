import { useState } from 'react'

const useInput = () => {
	const [value, setValue] = useState('')

	const setNewValue = (e) => {
		setValue(e.target.value)
	}

	const clear = () => {
		setValue('')
	}

	return [value, setNewValue, clear]
}

export default useInput
