import React, { useState, createContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useFilter } from "../../hooks/useFilter";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { data: postList, data: setPostList } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  const [id] = useState();

  const { data: post } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const { filter, setFilter } = useFilter("");

  return (
    <PostsContext.Provider
      value={{
        post,
        postList,
        setPostList,
        filter,
        setFilter,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
