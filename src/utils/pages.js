// Вспомогательные функции

/**
 * Находит количество страниц, необходимое для отображения постов
 * @param {Number} totalPages - всего постов
 * @param {Number} limit - постов на странице
 * @returns Number - количество страниц
 */
export const getPageCount = (totalPostsCount, limit) =>{
    return Math.ceil(totalPostsCount / limit)
}

// Сделать через хук usePagination
/**
 * Создает массив с индексами страниц
 * @param {*} totalPages - всего страниц
 * @returns 
 */
export const getPagesArray = (totalPages) =>{
    let pagesArray = [];
	for (let i = 0; i < totalPages; i++) {
		pagesArray.push(i+1);
	}
    return pagesArray;
}