import { useSelector } from 'react-redux'

const findBiggestPrice = (list) => {
	const monthesPriceSum = list.reduce((monthPriceSum, cost) => {
		const { price, date } = cost
		const monthNumber = new Date(date).getMonth()
		const copyMonthPriceSum = [...monthPriceSum]
		if(copyMonthPriceSum[monthNumber]) {
			copyMonthPriceSum[monthNumber] += +price
		}else{
			copyMonthPriceSum[monthNumber] = +price
		}
		return copyMonthPriceSum
	}, [])
	const theBiggestPrice = monthesPriceSum.reduce((biggestPrice, price) => {
		if(!price) {
			return biggestPrice
		}
		return Math.max(biggestPrice, price)
	}, 0)
	return theBiggestPrice
}

const monthListEng = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
]

const makeDiagramDataSets = (list, monthList, theBiggestPrice) => {
	const diagramDataSets = monthList.map(month => ({
		label: month,
		price: 0,
		maxPrice: theBiggestPrice
	}))
	list.forEach(cost => {
		const monthNumber = new Date(cost.date).getMonth()
		const { price } = cost
		diagramDataSets[monthNumber].price += +price
	})
	return diagramDataSets
}

const useDiagramData = (list) => {
	const selectedYear = useSelector(state => +state.filterSlice.filterValue)
	const willWeShowDiagram = !isNaN(selectedYear)
	if(!willWeShowDiagram) {
		return null
	}
	const theBiggestPrice = findBiggestPrice(list)
	const diagramDataSets = makeDiagramDataSets(list, monthListEng, theBiggestPrice)
	return diagramDataSets
}

export default useDiagramData
