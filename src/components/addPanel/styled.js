import Styled from 'styled-components'
import { colorPalette } from '../../mainStyles/styled'

export const StyledAddPanel = Styled.div`
	
`

export const StyledAddForm = Styled.div`
    width: 22.5rem;
    padding: 1.25rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
	background-color: ${colorPalette.darkBlue};
    & h2{
        margin: 0;
        margin-bottom: 0.75rem;
		text-transform: uppercase;
		font-weight: 600;
        font-size: 1.25rem;
		color: ${colorPalette.lightGrey};
    }
    & .addForm{
        display: flex;
        flex-direction: column;
    }
    & .inputBlock{
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5625rem;
        &:last-child{
            margin-bottom: 0;
        }
    }

    & .inputBlock input{
        font-size: 1rem;
        font-weight: 400;
        outline-width: 0;
		color: ${colorPalette.lightGrey};
		background-color: transparent;
		padding: 0;
		border: none;
		border-bottom: 1px solid ${colorPalette.lightGrey};
    }

	& .inputWithValidationText{
		& input{
			width: 100%;
			&::-webkit-calendar-picker-indicator {
				filter: invert(1);
			}
			&::placeholder {
				color: ${colorPalette.lightGrey};
			}
		}
		& .validationText{
			margin-top: 0.1rem;
			font-size: 0.7rem;
			font-weight: 300;
			color: ${colorPalette.red};
		}
	}

	& .twoBtns{
		display: flex;
		justify-content: space-between;
		& button{
			width: 69%;
			font-size: 1rem;
			&:last-child{
				width: 29%;
			}
		}
	}
`


export const StyledEnterButton = Styled.div`
	margin-top: 5rem;
	display: flex;
	justify-content: center;
`
