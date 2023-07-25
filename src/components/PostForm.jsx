import React, {useState} from "react";

import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

/**
 * Форма 
 * @param {Function} createPost - коллбек для создания поста
 * @returns 
 */
const PostForm = ({createPost}) => {
	//Данные из полей ввода
	const [post,setPost] = useState({title:'',body:''})
    
	/**
	 * Создание поста
	 */
	const addNewPost = (e) =>{
		e.preventDefault();
        const newPost = {
            ...post,id:Date.now()
        }
        createPost(newPost)
		//Очистка ввода
		setPost({title:'',body:''});
	}

    return (
        <form action="">
            {/* Управляемый компонент */}
            <MyInput 
                value={post.title}
                onChange = {e=>{setPost({...post, title:e.target.value})}}
                type="text" 
                placeholder="Название поста"
            />
            <MyInput 
                value={post.body}
                onChange = {e=>{setPost({...post, body:e.target.value})}}
                type="text" 
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
}

export default PostForm;

