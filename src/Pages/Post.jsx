import React from "react";
import { useContext } from "react";
import { PostsContext } from "../components/posts/PostsContext";

export const Post = () => {
  const { post } = useContext(PostsContext);

  console.log(post);

  return (
    <div key={post.id}>
      <h3>{post.title}</h3>
    </div>
  );
};
