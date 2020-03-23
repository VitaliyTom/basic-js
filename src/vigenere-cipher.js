class VigenereCipheringMachine {
	encrypt(message, key) {
		if (typeof message === 'undefined' || typeof key === 'undefined') {
			throw new Error();
		}

		let arr = [];
		let array = [];
		let alphabet = 65;
		let alpha;
		let code = '';
		let arrayMessage = [];
		let arrayKey = [];

		for (let i = 0; i < 26; i++) {
			alpha = alphabet;
			for (let j = 0; j < 26; j++) {
				if (alpha === 91) {
					alpha = 65;
				}
				arr.push(String.fromCharCode(alpha));
				alpha++;
			}
			array.push(arr);
			alphabet++;
			arr = [];
		}

		message = message.toUpperCase().split('');
		key = key.toUpperCase();
		let k = 0;

		do {
			if (message[k].charCodeAt() < 65 || message[k].charCodeAt() > 92) {
				arrayMessage.push(message[k]);
			}
			for (let i = 0; i < array.length; i++) {
				let j = 0;

				if (array[i][j] === message[k]) {
					arrayMessage.push(i);
				}
			}

			k++;
		} while (k < message.length);

		k = 0;
		let iter = 0;
		do {
			if (message[iter].charCodeAt() < 65 || message[iter].charCodeAt() > 92) {
				arrayKey.push(message[iter]);
				iter++;
			}

			for (let j = 0; j < array.length; j++) {
				let i = 0;

				if (key.length === k) {
					k = 0;
				}
				if (array[i][j] === key[k]) {
					arrayKey.push(j);
				}
			}
			iter++;
			k++;
		} while (iter < message.length);

		for (let i = 0; i < arrayMessage.length; i++) {
			if (message[i].charCodeAt() < 65 || message[i].charCodeAt() > 92) {
				code += message[i];
				continue;
			}
			code += array[arrayMessage[i]][arrayKey[i]];
		}
		return code;
	}

	decrypt(encryptedMessage, key) {
		if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') {
			throw new Error();
		}



	}
}

module.exports = VigenereCipheringMachine;