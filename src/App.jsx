import './App.css';
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newPost/NewPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";


function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/newpost" element={<NewPost/>}/>
                <Route path="/overview" element={<Overview/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
