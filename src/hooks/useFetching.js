import {useState} from "react";

/**
 * Кастомный хук для обработки запросов и индикации загрузки
 * @param {Function} callback 
 */

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () =>{
        try{
            setIsLoading(true);
            await callback();
        }
        catch (e){
            setError(e.message)
        } finally{
            setIsLoading(false);

        }
    }
    return [fetching,isLoading,error]
}