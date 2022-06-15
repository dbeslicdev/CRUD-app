import React from "react";
import { useParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();  

  const reduceComments = (comments) => {
    return comments.reduce((acc, comment) => {
      if (!acc[comment.postId]) {
        acc[comment.postId] = [comment.body];
        return acc;
      }
      acc[comment.postId] = [...acc[comment.postId], comment.body];
      return acc;
    }, {});
  };

  const reduceUsers = (users) => {
    return users.reduce((acc, user) => {
      acc[user.id] = user;

      return acc;
    }, {});
  };

  const fetchData = async () => {
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
      .then((response) => response.json())
      .then((json) => json);

    const comments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    )
      .then((response) => response.json())
      .then((json) => json);

    const users = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/users`
    )
      .then((response) => response.json())
      .then((json) => json);

    const reducedComments = reduceComments(comments);
    const reducedUsers = reduceUsers(users);

    const mapUsersAndCommentsToPosts = [posts].map((element) => {
      console.log(posts, "POST");
      element.comments = reducedComments[element.id];
      console.log(element.comments, "COMMENT");
      element.user = reducedUsers[element.userId];
      console.log(element.user, "USER");

      return element;
    });
  };  

  return (
    <div>
      <h2>Post {id}</h2>
      <p></p>
    </div>
  );
};
