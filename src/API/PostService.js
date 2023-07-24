import axios from "axios"

/**
 * API для работы с запросами
 * c помощью библиотеки axios
 */
export default class PostService {
    /**
     * Получить набор постов
     * @param {Number} limit 
     * @param {Number} page 
     * @returns 
     */
    static async getAll(limit = 10, page = 1){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }
    
    /**
     * Получить конкретный пост
     * @param {Number} id - номер поста
     * @returns 
     */
    static async getPostById(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response;
    }
    
    /**
     * Получить комментарии к посту
     * @param {Number} id - номер поста
     * @returns 
     */
    static async getCommentsById(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments` );
        return response;
    }
}