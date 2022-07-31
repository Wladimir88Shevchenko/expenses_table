import Styled from 'styled-components'
import { colorPalette } from '../../mainStyles/styled'

export const StyledFooter = Styled.footer`
	position: absolute;
	bottom: 0;
	right: 1rem;
	left: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 6.25rem;
	& .contactsBlock{
		display: flex;
		align-items: center;
		& .contactText{
			font-size: 1rem;
			font-weight: 400;
			margin-right: 3.125rem;
			color: ${colorPalette.black};
			text-transform: uppercase;
		}
		& .icon svg{
			width: 1.625rem;
		}
		& .icon:not(:last-child){
			margin-right: 1.9rem;
		}
		@media (max-width: 530px){
			& .contactText{
				margin-right: 1.125rem;
			}
			& .icon:not(:last-child){
				margin-right: 0.9rem;
			}
		}
	}

	& .rightsBlock h4{
		font-size: 1rem;
		text-transform: uppercase;
		color: ${colorPalette.black};
		font-weight: 400;
	}
`
