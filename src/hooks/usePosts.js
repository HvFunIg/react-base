import { useMemo } from "react"

// Кастомные хуки - функции, вызывающие обычные хуки
/**
 * Кастомный хук для сортировки постов
 * @param {*} posts 
 * @param {*} sort 
 */
export const useSortedPosts = (posts, sort) =>{
    // В константе лежат отсортированные массивы
	// useMemo - кэширование. Вычисление будет только тогда, когда изменится что-то из зависимостей в []
	const sortedPosts = useMemo(() => {
		if (sort) {
			return  [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
		}
		return posts
	},[sort,posts]) 
    return sortedPosts
}

/**
 * Кастомный хук для фильтрации и сортировки постов
 * @param {*} posts - посты
 * @param {String} sort - по какому критерию сортировать
 * @param {String} query - Строка для поиска
 * @returns 
 */
export const usePosts = (posts, sort, query) =>{
    const sortedPosts = useSortedPosts(posts, sort);
	const sortedAndSearchedPosts = useMemo(()=>{
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
	},[query,sortedPosts])
    return sortedAndSearchedPosts;
}