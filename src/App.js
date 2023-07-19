import React, {useState} from "react";
import './styles/app.css'
import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

	// Массив постов
	const [posts,setPosts] = useState([
		{ id:1, title:"JavaScript", body:"Description" },
		{ id:2, title:"Rrom", body:"Asdwqe" },
		{ id:3, title:"Whoosh", body:"kuliu" },
		{ id:4, title:"Aar", body:"Description" },
	]);
	
	// Сортировка 
	const [selectedSort,setSelectedSort] = useState("");

	/**
	 * Добавление поста
	 * @param {*} newPost 
	 */
	const createPost = (newPost) =>{
		setPosts([...posts, newPost])
	}

	/**
	 * Удаление поста
	 * @param {*} post 
	 */
	const removePost = (post) =>{
		setPosts(posts.filter (p => p.id !== post.id))
	}

	/**
	 * Сортировка по алфавиту
	 * @param {*} sort - поле, по которому будет сортировка
	 */
	const sortPosts = (sort) =>{
		setSelectedSort(sort)
		setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
		console.log(sort);
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<div>
				<MySelect 
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="Сортировка"
					options={[
						{value:"title",name:"По названию"},
						{value:"body",name:"По описанию"}
					]}
				/>
			</div>	

			{posts.length !==0
				? <PostList remove={removePost}  posts={posts} title="Список постов про JS"/>
				: <h1 style={{textAlign:"center"}}> Посты не найдены!</h1>
			}
			
		</div>
	); 
}

export default App;
