import React from "react";
import classes from "./MyInput.module.css"

/**
 * Инпут
 */
const MyInput = (props) => {
  return (
    //Передаем все пропсы в обычный инпут
    <input {...props} className={classes.myInput}></input>
  );
}
/**
 * Инпут с использованием useRef
 */
const MyInputRef = React.forwardRef((props,ref) => {
  return (
    //Передаем все пропсы в обычный инпут
    <input ref={ref} {...props} className={classes.myInput}></input>
  );
});

export default MyInput;

