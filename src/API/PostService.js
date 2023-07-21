import axios from "axios"

/**
 * API для работы с запросами
 */
export default class PostService {
    static async getAll(){
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return response.data
    }
}