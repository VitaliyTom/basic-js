class VigenereCipheringMachine {
	encrypt(message, key) {
		if (typeof message === 'undefined' || typeof key === 'undefined') {
			throw new Error();
		}
	
	}

	decrypt(encryptedMessage, key) {
		if (typeof encryptedMessage === 'undefined' || typeof key === 'undefined') {
			throw new Error();
		}
	
	}
}

module.exports = VigenereCipheringMachine;

// ---------------------------------------------------------------------------------------------------------
