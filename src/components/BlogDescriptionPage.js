import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogPageContext } from '../utils/BlogPageContext';
import UserAvatar from "../images/user-avatar.png";

const BlogDescriptionPage = () => {
    const { blogId } = useParams();
    const { blogData } = useBlogPageContext();

    const getSelectedBlogContent = blogData.filter((data) => {
        return data.id === +blogId
    });

    const { title, content, author } = getSelectedBlogContent[0];

    return (
        <div className='flex blog-description-page'>
            <p className="blog-title">{title}</p>
            <p className="blog-content">{content}</p>
            <div className="blog-author-section flex">
                <img src={UserAvatar} alt="UserAvatar" />
                <p className="blog-author">{author}</p>
            </div>
        </div>
    )
}

export default BlogDescriptionPage
