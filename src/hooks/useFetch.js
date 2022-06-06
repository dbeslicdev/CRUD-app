import React, { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(api.url)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  /* console.log(posts); */

  return {
    posts,
  };
};
