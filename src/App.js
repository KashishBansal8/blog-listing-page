import './App.css';
import BlogDescriptionPage from './components/BlogDescriptionPage';
import MainBlogPage from './components/MainBlogPage';
import { BlogPageContextProvider } from './utils/BlogPageContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BlogPageContextProvider>
      <Routes>
        <Route path="/" element={<MainBlogPage />} />
        <Route path="/blog/:blogId" element={<BlogDescriptionPage />} />
      </Routes>
    </BlogPageContextProvider>
  );
}

export default App;
