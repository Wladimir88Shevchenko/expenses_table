import React from 'react'
import DiagramBar from './DiagramBar'
import { StyledDiagram } from './styled'

const Diagram = ({ dataSets }) => {
	return(
		<StyledDiagram>
			{dataSets?.map(dataSet => (
				<DiagramBar
					key={dataSet.label}
					{...dataSet}
				/>
			))}
		</StyledDiagram>
	)
}

export default Diagram
