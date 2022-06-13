import React from "react";
import "./Posts.css";
import { PostsData } from "../components/posts/PostsData";

export const Posts = () => {
  return (
    <div className="posts">
      <div className="post-container">
        <PostsData />
      </div>
    </div>
  );
};
