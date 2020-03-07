const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	const K = 0.693 / HALF_LIFE_PERIOD;
	let number;

	if (typeof sampleActivity === 'string') {
		sampleActivity = parseFloat(sampleActivity);
		if (!isNaN(sampleActivity) && sampleActivity < 15 && sampleActivity > 0) {
			number = Math.log(MODERN_ACTIVITY / sampleActivity) / K;
		} else {
			return false;
		}
	} else {
		return false;
	}
	return Math.ceil(number);
};
