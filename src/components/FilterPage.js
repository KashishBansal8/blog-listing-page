import React from 'react';
import SearchFilter from './SearchFilter';
import SortByFilter from './SortByFilter';

const FilterPage = () => {
    return (
        <div className='filter-cont flex'>
            <SearchFilter />
            <SortByFilter />
        </div>
    )
}

export default FilterPage
