import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Blogs from "../components/Blogs"
import Blog from "../components/Blog"
import NewBlog from "../components/NewBlog";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/blog" element={<NewBlog />} />
    </Routes>
  </Router>
);