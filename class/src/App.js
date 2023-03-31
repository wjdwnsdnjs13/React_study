import React from "react";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import './App.css';
import Header from './Header';
import Box from './Box';
import Article from "./Article";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main0317 from "./0317/main0317";
import Main0324 from "./3weeks/main0324";
import Main0330 from "./4weeks/main0330";
import TodoList from "./4weeks/TodoList";
import Main from './Main';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/main0317' element={<Main0317/>}/>
          <Route path='/main0324' element={<Main0324/>}/>
          <Route path='/main0330' element={<Main0330/>}/>
          <Route path='/todoList' element={<TodoList/>}/>
          <Route path='/' element={<Main/>}/>
          
        </Routes>
      </BrowserRouter>
      {/* <Header></Header>
        <h1><a href="/">WEB</a></h1>
      <nav>
        <ol>
          <li><a href="/rr/1">HTMLM</a></li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>
      </nav>
      <Article></Article>
      <Box></Box>
      <Link to="/0317/main0317">0317</Link> */}
    </div>
  );
}

export default App;
