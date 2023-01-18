import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import InputTextUnderlined from '../UI/inputs/InputTextUnderlined';
import './Search.css';

const Search = React.forwardRef(({className, ...props}, ref) => {
    return (
        <div className={`search ${className}`}>
            <div className="search__search-icon">
                <FontAwesomeIcon icon={faSearch}/>
            </div>
            <InputTextUnderlined placeholder='Поиск' outlineColor={'rbga(0, 0, 0, .5)'} ref={ref} className='search__input' {...props}/>
        </div>
    );
})

export default Search;