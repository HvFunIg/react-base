import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "./PostIdPage";
import Login from "../pages/Login";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  //Получение данных из контекста AuthContext
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);

  // Ожидание авторизации
  if (isLoading){
    return <Loader/>
  }
  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/*" element={<Navigate to="/posts" />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/posts/:id" element={<PostIdPage />} />
          <Route path="/about" element={<About />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
