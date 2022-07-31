import React from 'react'
import useDiagramData from '../../hooks/useDiagramData'
import useFilterSortSearchList from '../../hooks/useFilterSortSearchList'
import AddPanel from '../addPanel/AddPanel'
import Diagram from '../diagram/Diagram'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SearchAndSortPanel from '../searchAndSortPanel/SearchAndSortPanel'
import Showcase from '../showcase/Showcase'
import YearFilter from '../yearFilter/YearFilter'
import { StyledMainPage, StyledNarrowRow } from './styled'

const MainPage = () => {
	const costsList = useFilterSortSearchList()
	const diagramDataSets = useDiagramData(costsList)
	return(
		<StyledMainPage>
			<StyledNarrowRow>
				<Header />
				<YearFilter />
				{
					diagramDataSets &&
				<Diagram
					dataSets={diagramDataSets}
				/>
				}
				<SearchAndSortPanel />
			</StyledNarrowRow>
			<Showcase
				costsList={costsList}
			/>
			<AddPanel />
			<Footer />
		</StyledMainPage>
	)
}

export default MainPage
