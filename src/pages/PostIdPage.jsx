import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "../hooks/useFetching";

import PostService from "../API/PostService";

import Loader from "../components/UI/loader/Loader";

/**
 * Страница отдельного поста
 * @returns
 */
const PostIdPage = () => {
	// Получить id из параметров URL
  	const params = useParams(); 

	// Данные поста
	const [post, setPost] = useState({});

	// Комментарии к посту
	const [comments, setComments] = useState([]);

	//Загрузчик данных поста
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getPostById(id);
		setPost(response.data);
	});

	//Загрузчик данных комментария
	const [fetchComments, isComLoading, ComError] = useFetching(async (id) => {
		const response = await PostService.getCommentsById(id);
		setComments(response.data);
	});

	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
	}, []);

  return (
    <div className="App">
      <h1>Вы открыли страницу поста c ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}{" "}
        </div>
      )}
      <h1>Комментарии</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="comment" >
              <h5> {comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
