import Styled from 'styled-components'
import { colorPalette } from '../../mainStyles/styled'

export const StyledSearch = Styled.div`
	& input{
		width: 17.5rem;
		border: none;
		border-bottom: 1px solid ${colorPalette.darkBlue};
		color: ${colorPalette.darkBlue};
		background-color: transparent;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.21875;
		@media (max-width: 1200px){
			border-bottom: 1px solid ${colorPalette.darkGrey};
		}
		&:focus{
			outline: none;
		}
		&::placeholder{
			color: ${colorPalette.darkBlue};
			opacity: 0.5;
		}
	}
`
