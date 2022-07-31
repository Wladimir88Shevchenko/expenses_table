import React from 'react'
import { StyledBox, StyledDiagramBar } from './styled'

const DiagramBar = (props) => {
	const { price, label, maxPrice } = props
	let fillProcent = 0
	let fillProcentReverce = 100
	if(maxPrice) {
		fillProcent = (price / maxPrice) * 100
		fillProcentReverce = 100 - fillProcent
	}
	if(fillProcentReverce === 100) {
		fillProcentReverce = 102
	}


	let boxes = []
	for(let i = 0; i < 5; i++) {
		boxes.push(<StyledBox key={i} />)
	}

	return (
		<StyledDiagramBar
			fillProcentReverce={fillProcentReverce}
			fillProcent={fillProcent}
		>
			<div className='diagramBar' >
				{ boxes }
			</div>
			<h4>{label}</h4>
		</StyledDiagramBar>
	)
}

export default DiagramBar
