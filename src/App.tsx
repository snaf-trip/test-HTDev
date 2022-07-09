import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreatePost, AllPosts } from "./pages/export.pages";
import { Header } from "./components/header/header.components";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/createPost"} />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/allPosts" element={<AllPosts />} />
      </Routes>
    </>
  )
}

export default App;
