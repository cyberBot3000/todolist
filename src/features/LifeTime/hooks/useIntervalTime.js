import { useEffect, useState } from 'react';
import getElapsedFullParts from '../utils/getElapsedFullParts';

const useIntervalTime = (startFrom, elapsedMilliseconds) => {
	const [intervalTime, setIntervalTime] = useState(1000);
	useEffect(() => {
		const elapsedTimeParts = getElapsedFullParts(
			startFrom,
			elapsedMilliseconds
		);
		if (elapsedTimeParts.days) {
			setIntervalTime(1000 * 60 * 60 * 24);
			return;
		}
		if (elapsedTimeParts.hours) {
			setIntervalTime(1000 * 60 * 60);
			return;
		}
		if (elapsedTimeParts.minutes) {
			setIntervalTime(1000 * 60);
			return;
		}
		setIntervalTime(1000 * 30);
	}, [elapsedMilliseconds]);
	return [intervalTime];
};

export default useIntervalTime;
