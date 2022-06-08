import React, { useState, createContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useFilter } from "../../hooks/useFilter";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { data: posts } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  const { data: user } = useFetch("https://jsonplaceholder.typicode.com/users");

  const { filter, setFilter } = useFilter("");

  return (
    <PostsContext.Provider
      value={{
        posts,
        user,
        filter,
        setFilter,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
