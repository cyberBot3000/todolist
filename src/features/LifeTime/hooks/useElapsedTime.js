import { useEffect, useState } from "react";
import getElapsedFullParts from "../utils/getElapsedFullParts";
import useIntervalTime from "./useIntervalTime";

const useElapsedTime = from => {
	const dateDiff = Date.now() - from;
	const [elapsedMilliseconds, setElapsedMilliseconds] = useState(dateDiff);
	const [intervalTime] = useIntervalTime(from, elapsedMilliseconds);

	const elapsedTimeParts = getElapsedFullParts(from, elapsedMilliseconds);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setElapsedMilliseconds(elapsedMilliseconds + intervalTime);
		}, intervalTime);
		return () => {
			clearInterval(intervalId);
		};
	}, [elapsedMilliseconds]);
	return [elapsedTimeParts];
};

export default useElapsedTime;
