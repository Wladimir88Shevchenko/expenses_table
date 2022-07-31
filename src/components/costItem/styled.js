import Styled from 'styled-components'
import { colorPalette } from '../../mainStyles/styled'

export const StyledCostItem = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
	padding: 1.25rem 0.9375rem;
    font-size: 1rem;
	font-weight: 400;
    border-radius: 5px;
    color: ${colorPalette.darkBlue};
    background-color: ${colorPalette.darkGrey};
    & .dateBox{
		flex: 0 1 10rem;
        cursor: default;
    }

    & .titleAndPriceBox{
		flex-grow: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: default;
		letter-spacing: 5%;
		& .titleLine{
			line-height: 1.25;
		}
		& .priceLine{
			line-height: 1.21875;
			font-weight: 800;
		}
    }

	& .deleteBlock{
		display: flex;
		flex-direction: row-reverse;
		flex: 0 1 10rem;
		& svg{
			cursor: pointer;
			width: 1.875rem;
		}
	}
`
