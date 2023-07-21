import React, {useEffect, useState} from "react";
import './styles/app.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";

import { usePosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";

import PostService from "./API/PostService";

import {getPageCount, getPagesArray} from "./utils/pages"
import Pagination from "./components/UI/pagination/Pagination";
function App() {

	// Массив постов
	const [posts,setPosts] = useState([]);
	
	//Объект для сортировки и фильтрации 
	const [filter,setFilter] = useState({sort:'',query:''});

	// Массив постов после поиска и фильтрации
	// Через кастомный хук
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	
	// Видимость модального окна
	const [modal,setModal] = useState(false);

	// Общее количество постов
	const [totalPages, setTotalPages] = useState(0);

	// Количество постов, получаемых с сервера
	const [limit, setLimit] = useState(10);

	// Индекс для пагинации
	const [page, setPage] = useState(1);

	/**  
	 * Получение постов с сервера 
	 * через кастомный хук 
	 */
	const [fetchPosts,isPostsLoading,postError] = useFetching(async (limit,page) =>{
		const response = await PostService.getAll(limit,page);
		setPosts(response.data);
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})
	
	const changePage = (page) =>{
		setPage(page);
		fetchPosts(limit,page)
	}
	/**
	 * Добавление поста
	 */
	const createPost = (newPost) =>{
		setPosts([...posts, newPost])
		setModal(false)
	}

	/**
	 * Удаление поста
	 */
	const removePost = (post) =>{
		setPosts(posts.filter (p => p.id !== post.id))
	}

	useEffect(()=>{
		fetchPosts(limit,page);
	},[])

	

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
			{postError &&
				<h1> Произошла ошибка {postError} </h1>
			}
			{ isPostsLoading 
				? <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}><Loader/> </div>
				:	<PostList remove={removePost}  posts={sortedAndSearchedPosts} title="Список постов про JS"/>
			}
			<Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages}
			/>
		</div>
	); 
}

export default App;
