import React from 'react';
import {articles} from './articleArray'
import ArticleContainer from './ArticleContainer';
import {ThemeConsumer} from "./ThemeProvider";
function Main(){
    return (
        <ThemeConsumer>
            {({theme}) => (
                <main className={`main ${theme}-theme`}>
                    {articles.map(article => (
                        <ArticleContainer article={article} />
                    ))}
               
                </main>
            )}
        </ThemeConsumer>
        
    )
}

export default Main;