import Styled from 'styled-components'
import { colorPalette } from '../../mainStyles/styled'

export const StyledBox = Styled.div`
	background-color: ${colorPalette.darkBlue};
	max-width: 100%;
	margin: 1px;
	height: calc(20% - 1px);
`

export const StyledDiagramBar = Styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& .diagramBar{
		flex-grow: 1;
		width: 1.6rem;
		position: relative;
		// closes unnecessary part of diagram
		&::before{
			content: '';
			position: absolute;
			top: 0;
			display: block;
			width: 100%;
			/* height: ${({ fillProcentReverce }) => (fillProcentReverce + 2) + '%' || 0}; */
			height: ${({ fillProcentReverce }) => fillProcentReverce + '%' || 0};
			background-color: white;
		}
		// little line under diagram
		&::after{
			content: '';
			position: absolute;
			width: 140%;
			left: 50%;
			transform: translate(-50%, 0);
			height: 1px;
			background-color: ${({ fillProcent }) => fillProcent ? colorPalette.darkBlue : colorPalette.darkGrey};
			bottom: -0.5rem;
		}
	}

	& h4{
		margin: 0;
		margin-top: 0.8rem;
		font-size: 1rem;
		font-weight: 400;
		color: ${({ fillProcent }) => fillProcent ? colorPalette.darkBlue : colorPalette.darkGrey};
	}

`

export const StyledDiagram = Styled.div`
	height: 9rem;
    margin: 0 auto;
	display: flex;
	justify-content: space-between;
`
