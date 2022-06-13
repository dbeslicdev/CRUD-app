import React, { useContext } from "react";
import "./PostsData.css";
import { PostsContext } from "../posts/PostsContext";
import { Link } from "react-router-dom";

export const PostsData = () => {
  const { postList, filter, setFilter } = useContext(PostsContext);

  return (
    <div className="posts">
      <input
        className="input"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {postList
        .filter((post) => post.title.includes(filter))
        .map((post) => (
          <ul>
            <Link to={`/post/${post.id}`}>
              <li key={post.id}>
                <h4 className="title">{post.title}</h4>
                <p>{post.body}</p>
              </li>
            </Link>
          </ul>
        ))}
    </div>
  );
};
