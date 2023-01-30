import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import useSearch from '../../hooks/useSearch';
import { getSimpleLocales } from '../../lib/locales';
import InputTextUnderlined from '../UI/inputs/InputTextUnderlined';
import './Search.css';

const Search = ({ className, filterFn, inArr }) => {
	const [inputVal, setInputVal] = useState('');
	const search = useSearch(filterFn);
	useEffect(() => {
		search('value', inputVal);
	}, [inArr, inputVal]);
	const { language } = useContext(Context);
	return (
		<div className={`search ${className}`}>
			<div className='search__search-icon'>
				<FontAwesomeIcon icon={faSearch} />
			</div>
			<InputTextUnderlined
				className='search__input'
				onInput={(e) => {
					setInputVal(e.target.value);
				}}
				outlineColor='rbga(0, 0, 0, .5)'
				placeholder={getSimpleLocales('search', language)}
				value={inputVal}
			/>
		</div>
	);
};

export default Search;
