import Styled from 'styled-components'

export const StyledModalWindow = Styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.5s; 
	pointer-events: ${({ active }) => active ? 'all' : 'none'};
	opacity: ${({ active }) => active ? 1 : 0};
	& .content{
		transform: ${({ active }) => active ? 'scale(1)' : 'scale(0.5)'};
		transition: 0.4s transform;
	}
`
