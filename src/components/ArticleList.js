import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {

    const articlePosts = posts.map((onePost) => {
        return (
            <Article 
                key={onePost.id} 
                title={onePost.title} 
                date={onePost.date} 
                preview={onePost.preview} 
            />
        )
    })

    return (
        <main>{articlePosts}</main>
    )
}

export default ArticleList