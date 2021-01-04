import React from 'react';

function ArticleContainer(props){
    const {imgUrl, title, subtitle} = props.article;
    return (
        <div className="article-container" style={{width: "60vw" }}>
            <img src={imgUrl} alt="article"></img>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
        </div>
    )
}

export default ArticleContainer;