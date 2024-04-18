import './App.css';
import BlogDescriptionPage from './components/BlogDescriptionPage';
import BlogListingPage from './components/BlogListingPage';
import Filter from './components/FilterPage';
import MainBlogPage from './components/MainBlogPage';
import { BlogPageContextProvider } from './utils/BlogPageContext';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BlogPageContextProvider>
      <Routes>
        <Route path="/" element={<MainBlogPage />} />
        {/* <Filter />
      <BlogListingPage /> */}
        {/* <Routes> */}
        <Route path="/blog/:blogId" element={<BlogDescriptionPage />} />
      </Routes>
    </BlogPageContextProvider>
  );
}

export default App;
