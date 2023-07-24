import React, { useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom"

import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
	// Проверка на авторизацию
	const [isAuth, setIsAuth] = useState(false);

	// Загрузка авторизации
	const [isLoading, setIsLoading] = useState(true);

	useEffect(()=>{
		if (localStorage.getItem('auth'))
			setIsAuth(true);
		setIsLoading(false)
	},[])
	// В value задаются пропсы, которые будут доступны отовсюду
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading
		}}>
			<BrowserRouter>
				<Navbar/>
				<AppRouter/>
			</BrowserRouter>
		</AuthContext.Provider>
	); 
}

export default App;

