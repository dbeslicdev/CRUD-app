import React from "react";
import { useFetch } from "../../hooks/useFetch";

export const PostsData = () => {
  const { posts } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  /*   console.log(JSON.stringify(posts)); */

  return (
    <div>
      {/* {JSON.stringify(posts)} */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title + " , " + post.body}</li>
        ))}
      </ul>
    </div>
  );
};
