module.exports = function repeater(str, options) {
	let result = str;
	let repeatTimes;
	let separator;
	let additionSeparator;
	let addition;
	let additionRepeatTimes;

	if ('additionRepeatTimes' in options) {
		additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
		additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
		addition = options.addition;
		result = str + (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
	}
	separator = options.separator === undefined ? '+' : (separator = options.separator);
	repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;

	str = (result + separator).repeat(repeatTimes).slice(0, -separator.length);

	return str;
};
