import Styled from 'styled-components'
import upArrow from '../../media/icons/arrow-up.png'
import downArrow from '../../media/icons/arrow-down.png'
import { colorPalette } from '../../mainStyles/styled'

export const StyledSortSelector = Styled.div`
	display: flex;
	& .filterSelect{
		// SINGLE VALUE
		&:focus{
			outline: 0 !important;
		}
		&__control{
			cursor: pointer !important;
			background-color: transparent !important;
			border: none !important;
			min-height: auto;
			&--is-focused{
				border: none !important;
				box-shadow: none !important;
				background-color: transparent !important;
			}
			&--menu-is-open {
				border: none !important;
				background-color: transparent !important;
				box-shadow: none !important;
				& .filterSelect__indicator{
					transform: none !important;
					& svg{
						width: 1.875rem !important;
					}
				}
				
			}
			& .filterSelect__indicator{
				transform: scale(1, -1);
				& svg{
					width: 1.875rem !important;
				}
			}
		}
		&__value-container {
			padding-left: 5px !important;
			padding-right: 0px !important;
			cursor: pointer !important;
		}
		&__input{
			caret-color: transparent !important;
			box-shadow: none !important;
			height: auto !important;
			cursor: pointer !important;
			opacity: 0 !important;
		}
		&__single-value{
			color: ${colorPalette.darkBlue} !important;
			font-weight: 400 !important;
			font-size: 1rem !important;
		}
		&__value-container{
			order: 2;
		}
		&__indicator-separator{
			display: none !important;
		}
		// DROPDOWN LIST
		&__menu{
			background-color: ${colorPalette.lightGrey} !important;
			border: none !important;
			border-radius: 5px !important;
			z-index: 10;
			color: ${colorPalette.darkBlue} !important;
			padding-top: 0;
			padding-bottom: 0;
			font-size: 0.75rem !important;
			font-weight: 300 !important;
			right: 0 !important;
			@media (max-width: 475px){
				width: 6.6875rem !important;
				margin-top: -5px;
			}
		}
		&__menu{
			overflow: hidden;
		}
		&__option{
			cursor: pointer;
			margin: 0;
			padding: 0;
			border-bottom: 1px solid ${colorPalette.darkGrey};
			display: flex;
			align-items: center;
			&:nth-child(odd){
				&::before{
					content: '';
					display: block;
					z-index: 20;
					background-image: url(${upArrow});
					background-size: cover;
					width: 30px;
					height: 30px;
					@media (max-width: 475px){
						width: 15px;
						height: 15px;
					}
				}
			}
			&:nth-child(even){
				&::before{
					content: '';
					background-image: url(${downArrow});
					background-size: cover;
					display: block;
					z-index: 20;
					width: 30px;
					height: 30px;
					@media (max-width: 475px){
						width: 15px;
						height: 15px;
					}
				}
			}

			&:first-child{
				border-bottom: none;
				border-bottom: 1px solid ${colorPalette.darkGrey};
				margin-top: -5px;
			}
			&:last-child{
				margin-bottom: -5px;
				border-bottom: none;
			}
			&--is-selected{
				color: ${colorPalette.darkBlue} !important;
				background-color: ${colorPalette.darkGrey} !important;
			}
			&--is-focused {
				background-color: ${colorPalette.darkGrey} !important;
			}
		}
		// IMG
		&__indicator{
			padding: 0 !important;
		}
		&__indicators{
			order: 1;
		}
	}
`
