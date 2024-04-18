import React, { useEffect, useState } from 'react'
import { useBlogPageContext } from '../utils/BlogPageContext';
import SearchIcon from "../images/search-interface-symbol.png";

const SearchFilter = () => {
    const [searchVal, setSearchVal] = useState("");
    const { blogData, setFilteredBlogData } = useBlogPageContext();

    useEffect(() => {
        // Search by title or author
        let lowerSearchVal = searchVal.toLowerCase();
        let searchedData = blogData.filter((data) =>
            data.title.toLowerCase().includes(lowerSearchVal) ||
            data.author.toLowerCase().includes(lowerSearchVal)
        );
        setFilteredBlogData(searchedData);
    }, [searchVal]);

    return (
        <div className='search-cont flex'>
            <input type="text" value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder='Search by title or author' />
            <img className='search-icon' src={SearchIcon} alt="SearchIcon" />
        </div>
    )
}

export default SearchFilter
