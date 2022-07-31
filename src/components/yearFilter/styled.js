import Styled from 'styled-components'
import { colorPalette } from '../../mainStyles/styled'

export const StyledYearFilter = Styled.div`
	margin-top: 1.75rem;
	& select{
		color: ${colorPalette.darkBlue};
		background-color: white;
		border: none;
		width: fit-content;
		position: relative;
		font-size: 1rem;
		&:focus{
			outline: 0;
		}
	}
	
`
