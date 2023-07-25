import {useState} from "react";

/**
 * Кастомный хук для обработки запросов и индикации загрузки
 * @param {Function} callback 
 */

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    /**
     * 
     * @param  {...any} args - limit и page из callback
     */
    const fetching = async (...args) =>{        
        try{
            setIsLoading(true);
            await callback(...args);
        }
        catch (e){
            setError(e.message)
        } finally{
            setIsLoading(false);
        }
    }
    return [fetching,isLoading,error]
}