const convertCoins = (coins) => {
	if(!coins) {
		return '00'
	}
	let stringCoins = coins.toString()
	if(stringCoins.length > 2) {
		const coinsArr = Array.from(stringCoins)
		stringCoins = coinsArr[0] + coinsArr[1]
	}
	const twoDigets = stringCoins.padEnd(2, '0')
	return twoDigets
}

export const convertNumberToBeautifulString = (number) => {
	let parts = number.toString().split('.')
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	parts[1] = convertCoins(parts[1])
	return parts.join('.')
}

const replaceComaToDot = (stringNumber) => {
	const replaced = +stringNumber.replace(/,/, '.')
	return replaced
}

export const convertStringToNumber = (stringNumb) => {
	if(!stringNumb?.length) {
		return null
	}
	const numberWithoutComa = replaceComaToDot(stringNumb)
	const clearNumber = +numberWithoutComa.toFixed(2)
	return clearNumber
}
