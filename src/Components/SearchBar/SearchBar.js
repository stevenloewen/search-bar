import React from 'react';
import './SearchBar.scss';

function SearchBar({inputChange}) {
    return (
        <div>
            <input placeholder='Search Countries ...' className='search-bar' onChange={inputChange}>
            </input>
        </div>
    );
}

export default SearchBar;