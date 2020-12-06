import React from 'react';
import blogData from "../blogData";
import BlogPost from "./BlogPost"

function BlogList(){

const blogPostComponents = blogData.map( blog => {
    return <BlogPost title = {blog.title} 
        subTitle = {blog.subTitle}
        author = {blog.author} 
        date = {blog.date} />
})

    return (
        <div className="blogList">
            {blogPostComponents}
            <button>Older Posts ></button>
        </div>
    )
}


export default BlogList;