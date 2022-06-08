import React, { useState } from "react";
import "./PostsData.css";
import { useFetch } from "../../hooks/useFetch";

export const PostsData = () => {
  const { data: posts } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  const { data: user } = useFetch("https://jsonplaceholder.typicode.com/users");

  const [filter, setFilter] = useState("");

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
            <li key={posts.id}>
              <h4 className="title">{post.title}</h4>
              <p>{post.body}</p>
            </li>
          </ul>
        ))}
    </div>
  );
};
