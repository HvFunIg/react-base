import React, { useState } from "react";
import './styles/app.css'
import PostList from "./components/PostList";

function App() {
	const [posts,setPosts] = useState([
		{ id:1, title:"JavaScript", body:"Description" },
		{ id:2, title:"JavaScript 2 ", body:"Description" },
		{ id:3, title:"JavaScript 3 ", body:"Description" },
		{ id:4, title:"JavaScript 4 ", body:"Description" },
	]);
	const [posts2,setPosts2] = useState([
		{ id:1, title:"Java", body:"Description" },
		{ id:2, title:"Java 2 ", body:"Description" },
		{ id:3, title:"Java 3 ", body:"Description" },
		{ id:4, title:"Java 4 ", body:"Description" },
	]);


  return (
    <div className="App">
		<PostList posts={posts} title="Список постов про JS"/>
		<PostList posts={posts2} title="Список постов про Java"/>
    </div>
  );
}

export default App;
