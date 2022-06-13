import React from "react";
import "./Post.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const Post = () => {
  const { id, postId } = useParams();

  const { data: post } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const { data: comments } = useFetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );

  console.log(id);
  console.log(postId);
  console.log(comments);

  return (
    <div className="post">
      <ul>
        <li className="list" key={id}>
          <h4 className="title">{post.title}</h4>
          <p>{post.body}</p>
        </li>
        {comments.map((comment) => (
          <ul className="comment">
            <li className="list" key={postId}>
              <h4>{comment.name}</h4>
              <h5>{comment.email}</h5>
              <p>{comment.body}</p>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
};
