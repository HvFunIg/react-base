import React, {useMemo,useState} from "react";
import './styles/app.css'
import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {

	// Массив постов
	const [posts,setPosts] = useState([
		{ id:1, title:"JavaScript", body:"Description" },
		{ id:2, title:"Rrom", body:"Asdwqe" },
		{ id:3, title:"Whoosh", body:"kuliu" },
		{ id:4, title:"Aar", body:"Description" },
	]);
	
	//Объект для сортировки и фильтрации 
	const [filter,setFilter] = useState({sort:'',query:''});

	// В константе лежат отсортированные массивы
	// useMemo - кэширование. Вычисление будет только тогда, когда изменится что-то из зависимостей в []
	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return  [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts
	},[filter.sort,posts]) 

	//Массив с результатом поиска
	const sortedAndSearchedPosts = useMemo(()=>{
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
	},[filter.query,sortedPosts])

	// Видимость модального окна
	const [modal,setModal] = useState(false);
	/**
	 * Добавление поста
	 * @param {*} newPost 
	 */
	const createPost = (newPost) =>{
		setPosts([...posts, newPost])
		setModal(false)
	}

	/**
	 * Удаление поста
	 * @param {*} post 
	 */
	const removePost = (post) =>{
		setPosts(posts.filter (p => p.id !== post.id))
	}


	return (
		<div className="App">
			<MyButton style={{marginTop:"30px"}} onClick={()=>setModal(true)}>
				Создать пост
			</MyButton>
			<MyModal 
				visible={modal}	
				setVisible={setModal}
			>
				<PostForm create={createPost} />
			</MyModal>
			
			<hr style={{margin:"10px 0"}}/>
			<PostFilter 
				filter={filter} 
				setFilter={setFilter}
			/>
			<PostList remove={removePost}  posts={sortedAndSearchedPosts} title="Список постов про JS"/>
		</div>
	); 
}

export default App;
