import React from "react";
import useElapsedTime from "../../hooks/useElapsedTime";
import parseTimeParts from "../../utils/parseTimeParts";

const LifeTime = ({ createdAt, className }) => {
	const [elapsedTimeParts] = useElapsedTime(new Date(createdAt));

	return <div className={className}>{parseTimeParts(elapsedTimeParts)}</div>;
};

export default LifeTime;
