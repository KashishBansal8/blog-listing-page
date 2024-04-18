import React from 'react';
import BlogListingPage from './BlogListingPage';
import FilterPage from './FilterPage';

const MainBlogPage = () => {
    return (
        <>
            <FilterPage />
            <BlogListingPage />
        </>
    )
}

export default MainBlogPage
