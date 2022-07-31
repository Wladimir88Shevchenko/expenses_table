import { configureStore } from '@reduxjs/toolkit'
import costsSlice from './slices/costsSlice'
import filterSlice from './slices/filterSlice'
import sortSlice from './slices/sortSlice'
import searchSlice from './slices/searchSlice'

const store = configureStore({
	reducer: {
		costsSlice,
		filterSlice,
		sortSlice,
		searchSlice
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export default store
