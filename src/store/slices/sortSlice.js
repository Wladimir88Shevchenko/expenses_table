import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	sortValue: 'money_up'
}

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		changeSortValue(state, action) {
			const { value } = action.payload
			state.sortValue = value
		}
	}
})

export const { changeSortValue } = sortSlice.actions

export default sortSlice.reducer
