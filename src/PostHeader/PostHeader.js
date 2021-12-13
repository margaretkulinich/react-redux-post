import React from "react";
import "./PostHeader.css";

export function PostHeader({ imageAuthor, author, userName, date }) {
    return (
        <div className="post-header">
            <div className="post-avatar">
                <img src={imageAuthor}/>
            </div>
            <h3>{author}
                <img className="verified-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png" />
                <span class="post-header-userName-date">{userName} {date}</span>
            </h3>
        </div>
    );
}
