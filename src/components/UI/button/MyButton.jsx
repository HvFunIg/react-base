import React from "react";
import classes from "./MyButton.module.css"

/**
 * Кнопка 
 */
const MyButton = ({children, ...props}) => {

  return (
    //Передаем все пропсы в обычную кнопку
    <button {...props} className={classes.myBtn}>       
        {children}
    </button>
  );
}

export default MyButton;

