import React from 'react';

import BlogCard from './BlogCard';
import { useBlogPageContext } from '../utils/BlogPageContext';

const BlogListingPage = () => {
    const { filteredBlogData } = useBlogPageContext();

    return (
        <div className='flex blog-listing-page'>
            {
                filteredBlogData?.length ?
                    filteredBlogData.map((blogData) => {
                        return (
                            <BlogCard key={blogData.id} blogData={blogData} />
                        )
                    })
                    : <p className='no-blog-section'>No Result Found ! </p>
            }
        </div>
    )
}

export default BlogListingPage
