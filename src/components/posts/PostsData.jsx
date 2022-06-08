import React, { useState, useContext } from "react";
import "./PostsData.css";
import { PostsContext } from "../posts/PostsContext";

export const PostsData = () => {
  const { user, posts, filter, setFilter } = useContext(PostsContext);

  console.log(user);
  console.log(posts);

  return (
    <div className="posts">
      <input
        className="input"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {posts
        .filter((post) => post.title.includes(filter))
        .map((post) => (
          <ul>
            <li key={post.id}>
              <h4 className="title">{post.title}</h4>
              <p>{post.body}</p>
            </li>
          </ul>
        ))}
    </div>
  );
};
