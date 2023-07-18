import React, { useRef, useState } from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

	//Массив постов
	const [posts,setPosts] = useState([
		{ id:1, title:"JavaScript", body:"Description" },
	]);
	
	//Данные из полей ввода
	const [post,setPost] = useState({title:'',body:''})

	/**
	 * Создание поста
	 */
	const addNewPost = (e) =>{
		e.preventDefault();

		setPosts([...posts,{...post,id:Date.now()}]);		//id - для уникальности

		//Очистка ввода
		setPost({title:'',body:''});
	}

	return (
		<div className="App">
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
					placeholder="Описание поста"/>
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title="Список постов про JS"/>
		</div>
	); 
}

export default App;
