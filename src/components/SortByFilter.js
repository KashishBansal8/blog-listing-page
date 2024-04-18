import React, { useEffect, useState } from 'react'
import { useBlogPageContext } from '../utils/BlogPageContext';

const SortByFilter = () => {
    let sortOptions = [
        { label: "Ascending", value: "ascending" },
        { label: "Descending", value: "descending" },
        { label: "Most recent", value: "mostRecent" },
    ]

    let [sortByOptions, setSortByOptions] = useState("Select");
    const { blogData, setFilteredBlogData } = useBlogPageContext();

    useEffect(() => {
        if (sortByOptions === "ascending") {
            let data = [...blogData];
            let result = data.sort((a, b) => a.author.localeCompare(b.author))
            setFilteredBlogData(result)
        }
        if (sortByOptions === "descending") {
            let data = [...blogData];
            let result = data.sort((a, b) => b.author.localeCompare(a.author))
            setFilteredBlogData(result);
        }
        else if (sortByOptions === "mostRecent") {
            let data = [...blogData];
            let result = data.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
            setFilteredBlogData(result);
        }
        else if (sortByOptions === "Select") {
            setFilteredBlogData(blogData);
        }
    }, [sortByOptions])

    return (
        <div className='sort-filter-cont'>
            <select onChange={(e) => setSortByOptions(e.target.value)}>
                <option value="Select">Select</option>
                {
                    sortOptions.map((sortOption, index) => {
                        return (
                            <option key={index} value={sortOption.value}>{sortOption.label}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default SortByFilter
