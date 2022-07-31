import { reverseOrSimpleNumberSort } from './numbers'

export const date = (list) => {
	return reverseOrSimpleNumberSort(list, 'simple', 'date')
}

export const dateReverse = (list) => {
	return reverseOrSimpleNumberSort(list, 'reverse', 'date')
}
