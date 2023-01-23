const toDays = ms => {
	return Math.trunc(ms / (1000 * 60 * 60 * 24));
};
const toHours = ms => {
	return Math.trunc(ms / (1000 * 60 * 60));
};
const toMinutes = ms => {
	return Math.trunc(ms / (1000 * 60));
};
const toSeconds = ms => {
	return Math.trunc(ms / 1000);
};

export { toDays, toHours, toMinutes, toSeconds };
