import { useEffect, useRef } from "react";

/**
 * Кастомный хук для работы с Intersection Observer
 * @param {*} ref - Наблюдаемый объект
 * @param {Boolean} canLoad - Ограничение на загрузку (например, выражение)
 * @param {Boolean} isLoading - Идет ли загрузка
 * @param {*} callback 
 */
export const useObserver = (ref,canLoad, isLoading,callback) =>{
    const observer = useRef();
	// Загрузка постов при скролле
	useEffect(()=>{
		if (isLoading) return;
		
		// Смена observer'a для корректной работы setPage
		if (observer.current) observer.current.disconnect();	

		const cb = (entries) =>{
			if (entries[0].isIntersecting && canLoad)
				callback();
		}

		// useRef используется для хранения данных при перерисовке
		observer.current = new IntersectionObserver(cb);
		observer.current.observe(ref.current)
	},[isLoading])
}