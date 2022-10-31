import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Edict from "./EdictTodoPage";
import HomePage from "./HomePage";
import NewTodo from "./NewTodoPage";
// import './App.css';


function App() {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/edit/:id" element={<Edict/>}/>
                <Route path="/new" element={<NewTodo/>}/>
                <Route path="*" element={<p>Not Fount</p>}/>
            </Routes>
        </HashRouter>
    )
}

export default App;
