import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from './PostIdPage';
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/posts"  />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default AppRouter;