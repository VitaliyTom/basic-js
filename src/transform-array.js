module.exports = function transform(arr) {
	let array = [];

	if (!Array.isArray(arr)) {
		throw new Error();
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '--discard-next') {
			i++;
			continue;
		}

		if (arr[i] === '--discard-prev') {
			if (i === 0) {
				continue;
			}
			array.pop();
			continue;
		}

		if (arr[i] === '--double-next') {
			if (i === arr.length - 1) {
				continue;
			}
			array.push(arr[i + 1]);
			continue;
		}

		if (arr[i] === '--double-prev') {
			if (i === 0) {
				continue;
			}
			array.push(arr[i - 1]);
			continue;
		}
		array.push(arr[i]);
	}
	return array;
};
