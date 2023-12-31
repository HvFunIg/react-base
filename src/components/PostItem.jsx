import React from "react";
import {useNavigate} from "react-router-dom"

import MyButton from "./UI/button/MyButton";

/**
 * Карточка поста
 * @param {*} id - id 
 * @param {*} title - заголовок 
 * @param {*} body - описание 
 * @returns 
 */
const PostItem = (props) => {
  const router = useNavigate();
  return (
    <div className = "post">
      <div className = "post__content">
        <h4>{props.post.id}. {props.post.title}</h4>
        <div>
          {props.post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={()=>router(`/posts/${props.post.id}`)}> Открыть</MyButton>
        <MyButton onClick={()=>props.remove(props.post)}> Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;

