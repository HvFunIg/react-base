import React, {useEffect, useRef, useState} from "react";

import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import {useObserver} from "../hooks/useObserver";

import {getPageCount, getPagesArray} from "../utils/pages"

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";

import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import MySelect from "../components/UI/select/MySelect";

import PostService from "../API/PostService";

import '../styles/app.css'

function Posts() {

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

	// Последний DOM-элемент в списке
	const lastElement = useRef();

	/**  
	 * Получение постов с сервера 
	 * через кастомный хук 
	 */
	const [fetchPosts,isPostsLoading,postError] = useFetching(async (limit,page) =>{
		const response = await PostService.getAll(limit,page);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})
	
	/**
	 * Создание поста
	 * @param {Object} newPost - Объект с инфо о посте
	 */
	const createPost = (newPost) =>{
		setPosts([...posts, newPost])
		setModal(false)
	}

	/**
	 * Удаление поста
	 * @param {Object} post - Объект с инфо о посте
	 */
	const removePost = (post) =>{
		setPosts(posts.filter (p => p.id !== post.id))
	}

	/**
	 * Проверка на "показать все посты". Если параметр указан как -1, то установить page = 1
	 * @param {Number} limit 
	 */
	const changeLimit = (limit) =>{
		setLimit(limit); 
		if (!limit)
			setPage(1)
	}
	
	// Загрузка постов при скролле
	useObserver(lastElement, page < totalPages, isPostsLoading, ()=>{
		setPage(page + 1)
	})

	// Загрузка постов при монтировании
	useEffect(()=>{
		fetchPosts(limit,page);
	},[page,limit])

	

	return (
		<div className="App">
			<MyButton colored={true} style={{marginTop:"30px"}} onClick={()=>setModal(true)}>
				Создать пост
			</MyButton>
			<MyModal 
				visible={modal}	
				setVisible={setModal}
			>
				<PostForm createPost={createPost} />
			</MyModal>
			
			<hr style={{margin:"10px 0"}}/>
			<PostFilter 
				filter={filter} 
				setFilter={setFilter}
			/>
			<div style={{display:"flex", width:300}}>
				<p>Количество подгружаемых за раз постов:</p>
				<MySelect
					value={limit}
					onChange={value=>changeLimit(value)}
					defaultValue={"Количество подгружаемых за раз постов"}
					options={[
						{value:5,name:'5'},
						{value:10,name:'10'},
						{value:25,name:'25'},
						{value:"-1",name:'Показать'},
					]}
				/>
			</div>
			{postError &&
				<h1> Произошла ошибка {postError} </h1>
			}
			<PostList remove={removePost}  posts={sortedAndSearchedPosts} title="Список постов про JS"/>
			<div ref={lastElement} ></div>
			{ isPostsLoading &&
				<div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}><Loader/> </div>
			}
		
		</div>
	); 
}

export default Posts;
