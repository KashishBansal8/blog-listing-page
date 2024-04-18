import React from 'react';
import UserAvatar from "../images/user-avatar.png";
import Calendar from "../images/calendar.png";
import { useNavigate } from "react-router-dom"

const BlogCard = ({ blogData }) => {
    const { id, urlToImage, title, author, publishedAt, topVisited } = blogData;

    const navigate = useNavigate();

    const navigateDashboard = (id) => {
        navigate(`/blog/${id}`);
    };
    return (
        <div className='blog-card flex'>
            {topVisited && <span className='top-visited-blog'>Top Visited</span>}
            <div>
                <div className="image-section">
                    <img src={urlToImage} alt="" />
                </div>
                <div className="blog-card-content flex">
                    <p className="blog-title">{title}</p>
                    <div className="blog-author-section flex">
                        <img src={UserAvatar} alt="UserAvatar" />
                        <p className="blog-author">{author}</p>
                    </div>
                    <div className="blog-date-section flex">
                        <img src={Calendar} alt="Calender" />
                        <p className="blog-date">{publishedAt}</p>
                    </div>
                    <button className='blog-view-btn' onClick={() => navigateDashboard(id)}>View</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
