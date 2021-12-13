import React from "react";
import "./PostContent.css"

export function PostContent(props) {
    const text = props.text;
    const img = props.img;

    return (
        <div className="post-content">
            {text ? <span className="post-content-text">{text}</span> : null}
            {img ? <img src={img}/> : null}
        </div>
    )       
}