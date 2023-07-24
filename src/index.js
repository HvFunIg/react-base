import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from './pages/About';
import Posts from './pages/Posts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);