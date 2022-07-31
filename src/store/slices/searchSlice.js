import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: ''
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		changeSearchValue(state, action) {
			const { searchValue } = action.payload
			state.searchValue = searchValue
		}
	}
})

export const { changeSearchValue } = searchSlice.actions

export default searchSlice.reducer
