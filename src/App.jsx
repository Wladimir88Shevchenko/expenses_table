import React from 'react'
import { StyledApp } from './mainStyles/styled'
import { Normalize } from 'styled-normalize'
import { Provider } from 'react-redux'
import store from './store'
import MainPage from './components/mainPage/MainPage'
import './mainStyles/mainStyle.css'

const App = () => {
	return (
		<Provider store={store}>
			<StyledApp>
				<Normalize />
				<MainPage />
			</StyledApp>
		</Provider>
	)
}

export default App
