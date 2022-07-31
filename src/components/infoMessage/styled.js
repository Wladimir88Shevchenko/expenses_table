import Styled from 'styled-components'
import { colorPalette } from '../../mainStyles/styled'

export const StyledInfoMessage = Styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& img {
		width: 4.5rem;
	}
	& h3, h5 {
		margin: 0;
	}
	& h3 {
		font-size: 2rem;
		font-weight: 500;
		color: ${colorPalette.darkBlue};
	}
	& h5 {
		font-size: 1.2rem;
		font-weight: 300;
		margin-top: 0.7rem;
		color: ${colorPalette.darkBlue};
	}

`
