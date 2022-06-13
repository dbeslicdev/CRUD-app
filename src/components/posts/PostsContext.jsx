import React, { createContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useFilter } from "../../hooks/useFilter";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { data: postList, data: setPostList } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  const { filter, setFilter } = useFilter("");

  return (
    <PostsContext.Provider
      value={{
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
