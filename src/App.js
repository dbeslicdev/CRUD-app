import { React, useState } from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import ContactInfo from "./Pages/ContactInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Counter } from "./Pages/Counter";
import { HomeProvider } from "./components/home/HomeContext";
import { AuthProvider } from "./components/authentication/AuthContext";
import { RequireAuth } from "./components/authentication/RequireAuth";
import { Posts } from "./Pages/Posts";
import { PostsProvider } from "./components/posts/PostsContext";
import { Post } from "./Pages/Post";


function App() {
  return (
    <AuthProvider>
      <HomeProvider>
        <PostsProvider>
          <Router>
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/post/:id" element={<Post />} />
              <Route
                exact
                path="/home"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="/contact-info"
                element={
                  <RequireAuth>
                    <ContactInfo />
                  </RequireAuth>
                }
              />
            </Routes>
          </Router>
        </PostsProvider>
      </HomeProvider>
    </AuthProvider>
  );
}

export default App;
