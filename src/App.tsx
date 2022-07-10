import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreatePostPage, AllPostsPage } from "./pages/export.pages";
import { Header } from "./components/header/header.components";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/createPost"} />} />
        <Route path="/createPost" element={<CreatePostPage />} />
        <Route path="/allPosts" element={<AllPostsPage />} />
      </Routes>
    </>
  )
}

export default App;
