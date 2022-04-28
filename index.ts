exports.getPrice = (time: number): number => {
	let total = 0;
	if (time > 10080) {
		const weeksNeeded = Math.ceil(time / 10080);

		total = weeksNeeded * 105;
	}
	if (time <= 10080) {
		total = 105;
	}
	if (time <= 1440) {
		total = 60;
	}
	if (time <= 1440) {
		total = 60;
	}
	if (time <= 120) {
		total = 44;
	}
	if (time <= 60) {
		total = 22;
	}
	if (time < 11) {
		total = time * 2;
	}

	return total;
};
