module.exports = function repeater(str, options) {
	let addition = '';
	let repeatTimes;
	let additionSeparator;
	let repeatTimesAddition;
	let separator;

	if ('addition' in options) {
		additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';
		repeatTimesAddition = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;

		addition = (additionSeparator + options.addition).repeat(repeatTimesAddition);
		addition = addition.replace(additionSeparator, '');
	}

	if ('repeatTimes' in options) {
		repeatTimes = options.repeatTimes === undefined ? (repeatTimes = 1) : (repeatTimes = options.repeatTimes);
		separator = 'separator' in options ? options['separator'] : '+';

		str = (separator + str + addition).repeat(repeatTimes);
		str = str.replace(separator, '');
	}
	return str;
};
