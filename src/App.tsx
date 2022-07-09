import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreatePost, AllPosts } from "./pages/export.pages";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/createPost"} />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/allPosts" element={<AllPosts />} />
      </Routes>
    </>
  )
}

export default App;
