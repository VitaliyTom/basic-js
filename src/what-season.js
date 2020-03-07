module.exports = function getSeason(date) {
	if (date === undefined) {
		return 'Unable to determine the time of year!';
	}

	date.getUTCDay();

	if (date instanceof Date) {
		let month = date.getMonth();

		if ((month >= 0 && month < 2) || month == 11) {
			return 'winter';
		}
		if (month > 1 && month < 5) {
			return 'spring';
		}
		if (month > 4 && month < 8) {
			return 'summer';
		} else {
			return 'autumn';
		}
	}
	throw new Error();
};
