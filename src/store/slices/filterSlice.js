import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	filterValue: 'all'
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeFilter(state, action) {
			const { filterValue } = action.payload
			state.filterValue = filterValue
		}
	}
})

export const { changeFilter } = filterSlice.actions

export default filterSlice.reducer
