import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	costsList: [
		{ title: 'rotex', date: (new Date('2021/03/24')).getTime(), price: 78, unicalId: 1 },
		{ title: 'beautiful black bed', date: (new Date('2022/09/13')).getTime(), price: 666, unicalId: 2 },
		{ title: 'cake', date: (new Date('2023/08/22')).getTime(), price: 4, unicalId: 3 },
		{ title: 'travel to USA', date: (new Date('2024/01/03')).getTime(), price: 3234.5, unicalId: 5 },
		{ title: 'macBook Pro', date: (new Date('2025/02/19')).getTime(), price: 3499, unicalId: 6 },
		{ title: 'car Tesla Model X', date: (new Date('2030/03/30')).getTime(), price: 115000, unicalId: 7 },
		{ title: 'travel to Odessa', date: (new Date('2022/07/14')).getTime(), price: 320, unicalId: 4 }
	]
}

const costsSlice = createSlice({
	name: 'cost',
	initialState,
	reducers: {
		addNewCost(state, action) {
			const { title, date, price } = action.payload
			const unicalId = `${title}${date.getTime()}${price}`
			state.costsList.push({
				title,
				date,
				price,
				unicalId
			})
		},
		removeCost(state, action) {
			const { id: idForRemove } = action.payload
			state.costsList = state.costsList.filter(cost => cost.unicalId !== idForRemove)
		}
	}
})

export const { addNewCost, removeCost } = costsSlice.actions

export default costsSlice.reducer
