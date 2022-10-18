import React from 'react';

const BlogList = (prop) => {

  const blogs = prop.blogs;
  const title = prop.title;

  return (
    <div>
      <h2>{ title }</h2>
      {
        blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))
      }
    </div>
     
  );
};

export default BlogList;