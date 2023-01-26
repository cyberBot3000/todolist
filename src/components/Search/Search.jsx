import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useSearch from '../../hooks/useSearch';
import InputTextUnderlined from '../UI/inputs/InputTextUnderlined';
import './Search.css';

const Search = ({
	className, filterFn, inArr,
}) => {
	const [inputVal, setInputVal] = useState('');
	const search = useSearch(filterFn);
	useEffect(() => {
		search('value', inputVal);
	}, [inArr, inputVal]);
	return (
		<div className={`search ${className}`}>
			<div className="search__search-icon">
				<FontAwesomeIcon icon={faSearch} />
			</div>
			<InputTextUnderlined
				className="search__input"
				onInput={(e) => { setInputVal(e.target.value); }}
				outlineColor="rbga(0, 0, 0, .5)"
				placeholder="Поиск"
				value={inputVal}
			/>
		</div>
	);
};

export default Search;
