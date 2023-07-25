import React from "react";
import classes from "./MyButton.module.css"

/**
 * Кастомная кнопка. Все пропсы прокидываются в обычный <button>
 * @param {Boolean} colored - Черная (true) или белая (false/null) версия кнопки
 * @returns 
 */
const MyButton = ({colored, children, ...props}) => {

  return (
    //Передаем все пропсы в обычную кнопку
    <button {...props} className={ colored ? [classes.myBtn, classes.myBtn__black].join(' ') : classes.myBtn }>       
        {children}
    </button>
  );
}

export default MyButton;

