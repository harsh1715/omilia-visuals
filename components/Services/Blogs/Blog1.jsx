import React from 'react';
import { useRouter } from 'next/router';

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Dummy data for the blog post (replace with actual data from backend)
  const blogPost = {
    id: 1,
    date: "April 30, 2024",
    title: "Title of the First Blog Post",
    content: `
      <p>This is the content of the first blog post. It can contain a detailed description of the topic, including any relevant information, images, or other media.</p>

      <h2>Section 1</h2>
      <p>This is the content of the first section of the blog post. It can contain additional details, analysis, or discussion related to the topic.</p>
      <img src="/images/bestshot.png" alt="Blog Post Image 1" class="mb-4 rounded-lg" />

      <h2>Section 2</h2>
      <p>This is the content of the second section of the blog post. It can contain additional details, analysis, or discussion related to the topic.</p>
      <img src="/images/blogbackground.png" alt="Blog Post Image 2" class="mb-4 rounded-lg" />

      <h2>Conclusion</h2>
      <p>This is the conclusion of the blog post, summarizing the key points or providing a final thought on the topic.</p>
    `,
    image: "/images/blogbackground.png",
    author: "John Doe",
    category: "Technology"
  };

  return (
    <div className="bg-[#373633] text-[#FFFFFF] py-8">
      <div className="max-w-6xl mx-auto px-10">
        <div className="blog-post">
          <img src={blogPost.image} alt="Blog Post Image" className="max-w-full h-auto mb-8 rounded-lg" />
          <div className="post-details">
            <span className="post-date">{blogPost.date}</span>
            <h1 className="post-title text-5xl font-semibold mb-4">{blogPost.title}</h1>
            <p className="post-author mb-4">By {blogPost.author}</p>
            <p className="post-category mb-8">Category: {blogPost.category}</p>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;