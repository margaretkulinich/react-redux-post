import { connect } from "react-redux";
import { createPost } from "./store/actions";
import { useState } from "react";
import Post from "./Post/Post";
import './App.css';

function AppConnected(props) {
  const { posts, authors, dispatch } = props;
  const [contentText, setContentText] = useState('');
  const [contentImgSrc, setContentImgSrc] = useState('');
  const [author, setAuthor] = useState('');

  const addPost = () => {
    dispatch(createPost(contentText, contentImgSrc, author));
  };

  const handleInputContent = (e) => {
    setContentText(e.target.value);
  }

  const handleInputImgSrc = (e) => {
    setContentImgSrc(e.target.value);
  }

  const handleSelectAuthor = (e) => {
    setAuthor(e.target.value);
  }


  return (
    <div className="feed-container">
      <div className="form">
        <input className="input-form" type="text" placeholder="enter text" value={contentText} onChange={handleInputContent}></input>
        <input className="input-form" type="text" placeholder="enter imagesrc" value={contentImgSrc} onChange={handleInputImgSrc}></input>
        <select className="input-form" value={author} onChange={handleSelectAuthor}>
          {authors.map(author => <option value={author}>{author}</option>)}
        </select>
        <button className = "button-add-post" onClick={addPost}>Add Post</button>
      </div>
      <ul className="feed">
        {posts.map((post, index) => <Post id={index} {...post} />)}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts,
  authors: state.authors,
});

const App = connect(mapStateToProps)(AppConnected);

export default App;
