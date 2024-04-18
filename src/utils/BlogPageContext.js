import React, { useState, useContext } from "react";
import BlogData from "../utils/blogData.json";

export const BlogPageContext = React.createContext();

export const useBlogPageContext = () => {
    return useContext(BlogPageContext);
}

export const BlogPageContextProvider = ({ children }) => {
    const blogData = BlogData;
    const [filteredBlogData, setFilteredBlogData] = useState(BlogData);

    return (
        <BlogPageContext.Provider value={{
            blogData, filteredBlogData, setFilteredBlogData
        }}>
            {children}
        </BlogPageContext.Provider>
    )
}