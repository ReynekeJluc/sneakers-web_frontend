export default function convert(currency, digits, value) {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: digits,
	}).format(value);
}
