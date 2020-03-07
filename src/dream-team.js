module.exports = function createDreamTeam(members) {
	let nameTeam = '';
	if (!Array.isArray(members)) {
		return false;
	}
	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] != 'string') {
			continue;
		}
		members[i] = members[i].trim();
		nameTeam += members[i][0];
	}
	nameTeam = nameTeam.toLocaleUpperCase().split('').sort().join('');
	return nameTeam;
};
