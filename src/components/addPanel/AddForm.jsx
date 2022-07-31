import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useInput from '../../hooks/useInput'
import { addNewCost } from '../../store/slices/costsSlice'
import { TomatoBtn, GreyBtn } from '../../mainStyles/styled'
import { convertStringToNumber } from '../../utils/numbersManipulation'
import { StyledAddForm } from './styled'

const AddForm = ({ toggleFormVisibility }) => {
	const [textValue, setTextValue, cleartextValue] = useInput()
	const [cost, setCost, clearCost] = useInput()
	const [date, setDate, clearDate] = useInput()
	const [validation, setValidation] = useState({
		text: false,
		date: false,
		price: false
	})

	const dispatch = useDispatch()

	const clearAllInputs = () => {
		cleartextValue()
		clearCost()
		clearDate()
	}

	const changeValidPropblemStatus = (type, value) => {
		setValidation(prevValid => ({
			...prevValid,
			[type]: value
		}))
	}

	const validationCheck = () => {
		const priceNumb = convertStringToNumber(cost)
		const emptyText = !textValue?.length
		const emptyDate = !date
		const emptyPrice = !priceNumb
		const negativePrice = +priceNumb < 0
		if(emptyText) {
			changeValidPropblemStatus('text', true)
		}else{
			changeValidPropblemStatus('text', false)
		}
		if(emptyDate) {
			changeValidPropblemStatus('date', true)
		}else{
			changeValidPropblemStatus('date', false)
		}
		if(emptyPrice) {
			changeValidPropblemStatus('price', true)
		}else{
			changeValidPropblemStatus('price', false)
		}
		if(negativePrice) {
			changeValidPropblemStatus('negativePrice', true)
		}else{
			changeValidPropblemStatus('negativePrice', false)
		}
		const validationSuccess = !emptyText && !emptyDate && !emptyPrice && !negativePrice
		return validationSuccess
	}

	const addNewCostHandler = () => {
		const validationSuccess = validationCheck()
		const priceNumb = convertStringToNumber(cost)
		if(validationSuccess) {
			dispatch(addNewCost({
				title: textValue,
				date: new Date(date),
				price: priceNumb
			}))
			clearAllInputs()
			toggleFormVisibility()
		}
	}

	return(
		<StyledAddForm
			validText={!validation.text}
			validDate={!validation.date}
			validPrice={!validation.price}
		>
			<h2>Add new cost</h2>
			<div className='addForm'>
				<div className='inputBlock costText'>
					<div className='inputWithValidationText'>
						<input
							value={textValue}
							onChange={setTextValue}
							id='costText'
							type='text'
							placeholder='It was...'
						/>
						{
							validation.text &&
							<h4 className='validationText'>Please, write what you bought</h4>
						}
					</div>
				</div>
				<div className='inputBlock costPrice'>
					<div className='inputWithValidationText'>
						<input
							value={cost}
							onChange={setCost}
							id='costPrice'
							type='number'
							placeholder='It cost...'
						/>
						{
							validation.price &&
							<h4 className='validationText'>Please, fill how much it cost</h4>
						}
						{
							validation.negativePrice &&
							<h4 className='validationText'>Please, fill positive number for price</h4>
						}
					</div>
				</div>
				<div className='inputBlock costDate'>
					<div className='inputWithValidationText'>
						<input
							value={date}
							onChange={setDate}
							id='costDate'
							type='date'
						/>
						{
							validation.date &&
							<h4 className='validationText'>Please, choose date when it was</h4>
						}
					</div>
				</div>
				<div className='twoBtns'>
					<GreyBtn
						className='addBtn'
						onClick={addNewCostHandler}
					>Add cost</GreyBtn>
					<TomatoBtn
						className='cancelBtn'
						onClick={toggleFormVisibility}
					>
						Cancel
					</TomatoBtn>
				</div>
			</div>
		</StyledAddForm>
	)
}

export default AddForm
