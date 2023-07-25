import React, { useContext } from 'react';
import {Link} from "react-router-dom"
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';
import classes from "./Navbar.module.css"

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    /**
     * Разлогинивание
     */
    const logout = () =>{
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className={classes.navbar}>
            {isAuth
                ? <MyButton onClick={logout}> Выйти</MyButton>
                :   ""
            }
                
            <div className={classes.navbar__links}>
                <Link className={classes.link} to ="/posts"> Посты </Link>
                <Link className={classes.link} to ="/about"> О сайте </Link>
            </div>
        </div>
    );
};

export default Navbar;