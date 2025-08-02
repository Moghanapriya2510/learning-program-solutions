import React from 'react';

function BlogDetails({ blog }) {
  return blog ? (
    <div>
      <h2>Blog Details</h2>
      <p>Title: {blog.title}</p>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.date}</p>
    </div>
  ) : (
    <div>Loading blog...</div>
  );
}

export default BlogDetails;