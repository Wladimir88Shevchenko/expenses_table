import Styled from 'styled-components'
import { colorPalette } from '../../mainStyles/styled'

export const StyledHeader = Styled.header`
	& h1{
		color: ${colorPalette.darkBlue};
		text-transform: uppercase;
		font-size: 2.5rem;
		font-weight: 900;
		letter-spacing: 0.3rem;
		& .redLetter{
			color: ${colorPalette.red};
		}
	}
`
