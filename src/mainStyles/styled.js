import Styled from 'styled-components'

// VARIABLES

export const colorPalette = {
	red: '#F1404B',
	darkBlue: '#252C41',
	lightGrey: '#F4F5F9',
	darkGrey: '#DDDFE6',
	black: '#000000'
}

export const fontsWeight = {
	light: '300',
	regular: '400',
	semiBold: '600',
	extraBold: '800',
	black: '900'
}

// MAIN STYLES FOR ALL PAGE
export const StyledApp = Styled.div`
    font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	& *{
		box-sizing: border-box;
	}
	& h1, h2, h3, h4 {
		margin: 0;
	}
`

// REPEATED ELEMENTS
const BtnPrototype = Styled.button`
	background-color: ${colorPalette.darkGrey};
	color: ${colorPalette.darkBlue};
	border-radius: 0.3125rem;
	font-size: 1rem;
	font-weight: 600;
	height: 1.875rem;
	cursor: pointer;
	transition: all 0.2s;
	border: none;
	&:hover{
		filter: brightness(80%);
	}
`

export const DarkBlueBtn = Styled(BtnPrototype)`
	height: 4.5rem;
	width: 22.5rem;
	font-size: 1.25rem;
	font-weight: 500;
	color: ${colorPalette.lightGrey};
	background-color: ${colorPalette.darkBlue};
`

export const GreyBtn = Styled(BtnPrototype)`
	width: 11.625rem;
`

export const TomatoBtn = Styled(BtnPrototype)`
	background-color: ${colorPalette.red};
	width: 7.125rem;
`
