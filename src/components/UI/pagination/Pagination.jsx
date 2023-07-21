import React from 'react';
import { getPagesArray } from '../../../utils/pages';

/**
 * Элемент пагинации
 * @param {Number} totalPages - Всего страниц
 * @param {Number} page - Текущая страница
 * @param {Function} changePage - Функция, вызываемая при нажатии на новую страницу
 * @returns 
 */
const Pagination = ({totalPages,page,changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="page__wrapper">
            {pagesArray.map(p => 
                <span 
                    key={p} 
                    onClick={()=>changePage(p)}
                    className={page === p ? 'page__btn page__current' : 'page__btn'}>
                        {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;