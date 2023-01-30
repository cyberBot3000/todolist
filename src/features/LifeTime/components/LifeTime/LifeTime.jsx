import React from 'react';
import useElapsedTime from '../../hooks/useElapsedTime';
import parseTimeParts from '../../utils/parseTimeParts';

const LifeTime = ({ createdAt, className, locale }) => {
	const [elapsedTimeParts] = useElapsedTime(new Date(createdAt));

	return (
		<div className={className}>
			{parseTimeParts(elapsedTimeParts, locale)}
		</div>
	);
};

export default LifeTime;
