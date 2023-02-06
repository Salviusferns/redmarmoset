import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonAddDisabledOutlinedIcon from '@mui/icons-material/PersonAddDisabledOutlined';
import { db, fb } from "../../firebase/FirebaseInit";

function Post({ postId, user, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [followed, setFollowed] = useState(false);

useEffect(() => {
  let unsubscribe;
  if (postId) {
    unsubscribe = db
      .collection("posts")
      .doc(postId)
      .collection("likes")
      .onSnapshot((snapshot) => {
        setLikes(snapshot.docs.length);
      });
  }
  return () => {
    unsubscribe();
  };
}, [postId]);

  const postLike = (e) => {
    if (user) {
    db.collection("posts").doc(postId).collection("likes").add({
      likes: likes,
      username: user.displayName,
      timestamp: fb.firestore.FieldValue.serverTimestamp(),
    });
    setLikes(0);
  };
}
  const followUser = (e) => {
    if (user) {
      db.collection("users").doc(username).collection("followers").add({
        follower: user.displayName,
        timestamp: fb.firestore.FieldValue.serverTimestamp(),
      });
      setFollowed(true);
    }
  };

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);
  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: fb.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  const deletePost = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).delete();
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
        <div className="post__action">
      {followed ? (
        <p>Followed</p>
      ) : (
        <PersonAddDisabledOutlinedIcon onClick={followUser} />
      )}
    </div>
        <button className="delete__button" onClick={deletePost}>
              Delete Post
            </button>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      <div className="post__likes">
  <button onClick={postLike}>
    <FavoriteBorderIcon /> {likes}
  </button>

</div>

      {
        <div className={comments.length > 0 ? "post__comments" : ""}>
          {comments.map((comment) => (
            <p>
              <strong>{comment.username}</strong> {comment.text}
            </p>
          ))}
        </div>
      }
      {user && (
        <form className="comment__form">
          <div className="comment__wrapper">
            <input
              className="comment__Input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="comment__button text__button"
              disabled={!comment}
              onClick={postComment}
              type="submit"
            >
              Post
            </button>

          </div>
        </form>
      )}
    </div>
  );
}

export default Post;