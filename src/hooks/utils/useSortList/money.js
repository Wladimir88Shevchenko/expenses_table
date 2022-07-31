import { reverseOrSimpleNumberSort } from './numbers'

export const money = (list) => {
	return reverseOrSimpleNumberSort(list, 'simple', 'price')
}

export const moneyReverse = (list) => {
	return reverseOrSimpleNumberSort(list, 'reverse', 'price')
}
