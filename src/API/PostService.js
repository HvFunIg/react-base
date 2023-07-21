import axios from "axios"

/**
 * API для работы с запросами
 */
export default class PostService {
    static async getAll(limit = 10, page = 1){
        // Запрос с помощью библиотеки axios
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
}