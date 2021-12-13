import React from "react";
import { PostHeader } from "../PostHeader/PostHeader";
import "./Post.css";
import { PostControllers } from "../PostControllers/PostControllers";
import { PostContent } from "../PostContent/PostContent";


export default function Post({ imageAuthor, author, userName, date, text, img, likes, comments, reposts }) {
    return (
        <div className="post">
            <PostHeader
                imageAuthor={imageAuthor} 
                author={author}
                userName={userName}
                date={date}
            />
            <PostContent
                text={text}
                img={img}
            />
            <PostControllers
                likes={likes}
                comments={comments}
                reposts={reposts}
            />
        </div>
    )
}