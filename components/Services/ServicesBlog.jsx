// import Link from "next/link";

// const BlogOverview = () => {
    
//     return (
//         <div className="flex justify-center items-center flex-col md:flex-row bg-[#373633] text-[#FFFFFF] h-[777px] p-8">
//             <div className="bg-white w-[580px] h-[300px] rounded-3xl"></div>
//             <div className="max-w-2xl ml-12">
//                 <h1 className="text-5xl font-thin mb-6 font-caudex">All Blog Posts</h1>
//                 <div className="font-thin" style={{
//                     fontFamily: 'Helvetica Neue',
//                     fontWeight: '400',
//                     fontSize: '25px',
//                     lineHeight: '30px',
//                 }}>
//                 </div>
//             </div>
//         </div>
//     )
// }

// // export default BlogOverview;






import React, { useState } from 'react';
import Link from 'next/link';

const BlogOverview = () => {
  // Dummy data for blog posts (replace with actual data from backend)
  const allBlogPosts = [
    {
      id: 1,
      date: "April 30, 2024",
      title: "Title of the First Blog Post",
      summary: "This is a small summary of the first blog post content. It can contain a brief overview of what the blog post is about.",
      image: "/images/blogbackground.png",
      url: "blog1"
    },
    {
      id: 2,
      date: "May 1, 2024",
      title: "Title of the Second Blog Post",
      summary: "This is a small summary of the second blog post content. It can contain a brief overview of what the blog post is about.",
      image: "/images/blogbackground.png",
      url: "blog2"
    },
    {
      id: 3,
      date: "May 1, 2024",
      title: "Title of the Third Blog Post",
      summary: "This is a small summary of the third blog post content. It can contain a brief overview of what the blog post is about.",
      image: "/images/blogbackground.png",
      url: "blog3"
    },
    {
      id: 4,
      date: "May 1, 2024",
      title: "Title of the Fourth Blog Post",
      summary: "This is a small summary of the fourth blog post content. It can contain a brief overview of what the blog post is about.",
      image: "/images/blogbackground.png",
      url: "blog4"
    },
    {
      id: 5,
      date: "May 1, 2024",
      title: "Title of the Fifth Blog Post",
      summary: "This is a small summary of the fifth blog post content. It can contain a brief overview of what the blog post is about.",
      image: "/images/blogbackground.png",
      url: "blog5"
    },
    {
      id: 6,
      date: "May 1, 2024",
      title: "Title of the Sixth Blog Post",
      summary: "This is a small summary of the sixth blog post content. It can contain a brief overview of what the blog post is about.",
      image: "/images/blogbackground.png",
      url: "blog6"
    },
    {
      id: 7,
      date: "May 1, 2024",
      title: "Title of the Seventh Blog Post",
      summary: "This is a small summary of the seventh blog post content. It can contain a brief overview of what the blog post is about.",
      image: "/images/blogbackground.png",
      url: "blog7"
    },
    {
      id: 8,
      date: "May 1, 2024",
      title: "Title of the Eighth Blog Post",
      summary: "This is a small summary of the eighth blog post content.yesss It can contain a brief overview of what the blog post is about.",
      image: "/images/blogbackground.png",
      url: "blog8"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [sortOrder, setSortOrder] = useState('latest');
  const postsPerPage = 6;

  const filteredBlogPosts = allBlogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedBlogPosts = filteredBlogPosts.sort((a, b) => {
    if (sortOrder === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedBlogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(sortedBlogPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset the current page when searching
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSortOrder = () => {
    setSortOrder(sortOrder === 'latest' ? 'oldest' : 'latest');
  };

  return (
    <div className="bg-[#373633] text-[#FFFFFF] py-8">
      <div className="max-w-6xl mx-auto px-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-5xl font-thin font-caudex">All Blog Posts</h1>
          <div className="flex items-center">
            <div className="relative mr-4">
              {showSearchInput && (
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="bg-[#FFFFFF] text-[#373633] px-4 py-2 rounded-md pr-10"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              )}
              <button
                className="px-4 py-2 rounded-md hover:bg-[#CCCCCC] hover:text-[#373633]"
                onClick={toggleSearchInput}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="relative">
              <button
                className="px-4 py-2 rounded-md flex items-center hover:bg-[#CCCCCC] hover:text-[#373633]"
                onClick={handleSortOrder}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {sortOrder === 'latest' ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l-4-4"
                    />
                  )}
                </svg>
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <Link href={`/${post.url}`} key={post.id}>
              <div className="blog-post-container cursor-pointer">
                <img src={post.image} alt="Blog Post Image" className="max-w-full h-auto mb-4 rounded-lg" />
                <div className="post-details">
                  <span className="post-date">{post.date}</span>
                  <h2 className="post-title text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="post-summary">{post.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              className={`px-4 py-2 mx-2 rounded-md ${
                currentPage === pageNumber
                  ? 'bg-[#FFFFFF] text-[#373633]'
                  : 'bg-[#373633] text-[#FFFFFF] hover:bg-[#CCCCCC] hover:text-[#373633]'
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogOverview;
