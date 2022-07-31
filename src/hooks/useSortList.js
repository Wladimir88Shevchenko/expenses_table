import { useSelector } from 'react-redux'
import { abc, abcReverse } from './utils/useSortList/abc'
import { date, dateReverse } from './utils/useSortList/date'
import { money, moneyReverse } from './utils/useSortList/money'

const sortList = (list, sortValue) => {
	switch(sortValue) {
		case 'money_down':
			return moneyReverse(list)
		case 'abc_up':
			return abc(list)
		case 'abc_down':
			return abcReverse(list)
		case 'date_up':
			return date(list)
		case 'date_down':
			return dateReverse(list)
		default:
			return money(list)
	}
}

const useSortList = (list) => {
	const sortValue = useSelector(state => state.sortSlice.sortValue)
	const sortedList = sortList(list, sortValue)
	return sortedList
}

export default useSortList
