import React from 'react';
import classes from "./MyModal.module.css"

/**
 * Модальное окно
 * @param {*} param0 
 */
const MyModal = ({children,visible,setVisible}) => {

    const rootClasses = [classes.myModal];
    if (visible){
        rootClasses.push(classes.active)
    }

    // Модальное окно закрывается при клике ТОЛЬКО на темную часть. 
    // Для этого отменяем всплытие событий через stopPropagation
    return (
        <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) =>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;