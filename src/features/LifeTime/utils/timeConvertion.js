const toDays = (ms) => Math.trunc(ms / (1000 * 60 * 60 * 24));
const toHours = (ms) => Math.trunc(ms / (1000 * 60 * 60));
const toMinutes = (ms) => Math.trunc(ms / (1000 * 60));
const toSeconds = (ms) => Math.trunc(ms / 1000);

export { toDays, toHours, toMinutes, toSeconds };
