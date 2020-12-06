import React from 'react';

function BlogPost(props){
    return (
        <div className="blog">
            <a href="www.google.com">
                <h2>{props.title}</h2>
                <h3>{props.subTitle}</h3>
            </a>
            <p>Posted by <a href="www.google.com">{props.author}</a> on {props.date}</p>
            <hr></hr>
        </div>
    )
}

export default BlogPost;