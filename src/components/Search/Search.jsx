import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useSearch from '../../hooks/useSearch';
import InputTextUnderlined from '../UI/inputs/InputTextUnderlined';
import './Search.css';

const Search = ({className, filterFn, inArr, ...props}) => {
    const [inputVal, setInputVal] = useState('');
    const search = useSearch(filterFn);
	useEffect(() => {
		search('value', inputVal);
	}, [inArr, inputVal]);
    return (
        <div className={`search ${className}`}>
            <div className="search__search-icon">
                <FontAwesomeIcon icon={faSearch}/>
            </div>
            <InputTextUnderlined placeholder='Поиск' outlineColor={'rbga(0, 0, 0, .5)'} value={inputVal} onInput={(e) => {setInputVal(e.target.value)}} className='search__input' {...props}/>
        </div>
    );
}

export default Search;