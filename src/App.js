import React, {useState} from "react";
import './styles/app.css'
import PostList from "./components/PostList";

import PostForm from "./components/PostForm";

function App() {

	//Массив постов
	const [posts,setPosts] = useState([
		{ id:1, title:"JavaScript", body:"Description" },
	]);
	
	const createPost = (newPost) =>{
		setPosts([...posts, newPost])
	}

	return (
		<div className="App">
			<PostForm create={createPost}/>
			<PostList posts={posts} title="Список постов про JS"/>
		</div>
	); 
}

export default App;
