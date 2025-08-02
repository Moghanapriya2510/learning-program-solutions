import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('book');
  const [showContent, setShowContent] = useState(true);

  // Sample data
  const bookData = {
    title: 'React for Beginners',
    author: 'John Doe',
    year: 2023
  };

  const blogData = {
    title: 'Learning React Hooks',
    author: 'Jane Smith',
    date: '2023-05-15'
  };

  const courseData = {
    title: 'Advanced React Patterns',
    instructor: 'Mike Johnson',
    duration: '8 weeks'
  };

  // Render different content based on activeTab
  const renderContent = () => {
    switch(activeTab) {
      case 'book':
        return <BookDetails book={bookData} />;
      case 'blog':
        return <BlogDetails blog={blogData} />;
      case 'course':
        return <CourseDetails course={courseData} />;
      default:
        return <BookDetails book={null} />;
    }
  };

  return (
    <div className="App">
      <h1>Blogger App</h1>
      
      <div className="tabs">
        <button onClick={() => setActiveTab('book')}>Book</button>
        <button onClick={() => setActiveTab('blog')}>Blog</button>
        <button onClick={() => setActiveTab('course')}>Course</button>
      </div>

      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? 'Hide Content' : 'Show Content'}
      </button>

      {/* Conditional rendering using && operator */}
      {showContent && renderContent()}

      {/* Conditional rendering using ternary operator */}
      {activeTab === 'book' ? (
        <p>Currently viewing book details</p>
      ) : activeTab === 'blog' ? (
        <p>Currently viewing blog details</p>
      ) : (
        <p>Currently viewing course details</p>
      )}
    </div>
  );
}

export default App;