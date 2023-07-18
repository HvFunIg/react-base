import React, { useRef, useState } from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
	const [posts,setPosts] = useState([
		{ id:1, title:"JavaScript", body:"Description" },
		{ id:2, title:"JavaScript 2 ", body:"Description" },
		{ id:3, title:"JavaScript 3 ", body:"Description" },
		{ id:4, title:"JavaScript 4 ", body:"Description" },
	]);
	
	const [title,setTitle] = useState('')
	const [body,setBody] = useState('')

	/**
	 * Создание поста
	 * @param {*} e 
	 */
	const addNewPost = (e) =>{
		e.preventDefault();
		const newPost = {
			title,
			body
		}
		console.log(newPost);
	}

	return (
		<div className="App">
			<form action="">
				{/* Управляемый компонент */}
				<MyInput 
					value={title}
					onChange = {e=>{setTitle(e.target.value)}}
					type="text" 
					placeholder="Название поста"
				/>
				<MyInput 
						value={body}
						onChange = {e=>{setBody(e.target.value)}}
					type="text" 
					placeholder="Описание поста"/>
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title="Список постов про JS"/>
		</div>
	); 
}

export default App;
