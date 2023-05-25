import React from "react";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main0317 from "./0317/main0317";
import Main0324 from "./3weeks/Main0324";
import Main0330 from "./4weeks/Main0330";
import Main0406 from "./5weeks/Main0406";
import TodoList from "./4weeks/TodoList";
import TodoListNew from "./5weeks/TodoListNew";
import Main0413 from "./6weeks/Main0413";
import Main from './Main';
import Main0414 from "./6weeks/Main0414";
import Clock from "./9weeks/Clock";
import Main0504 from "./9weeks/Main0504";
import Main0511 from "./10weeks/Main0511";
import Main0512 from "./10weeks/Main0512";
import Main0525 from "./12weeks/Main0525";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/main0317' element={<Main0317/>}/>
          <Route path='/main0324' element={<Main0324/>}/>
          <Route path='/Main0330' element={<Main0330/>}/>
          <Route path='/todoList' element={<TodoList/>}/>
          <Route path='/Main0406' element={<Main0406/>}/>
          <Route path='/todoListNew' element={<TodoListNew/>}/>
          <Route path='/Main0413' element={<Main0413/>}/>
          <Route path='/' element={<Main/>}/>
          <Route path='/Main0414' element={<Main0414/>}/>
          <Route path='/Clock' element={<Clock/>}/>
          <Route path='/Main0504' element={<Main0504/>}/>
          <Route path='/Main0511' element={<Main0511/>}/>
          <Route path='/Main0512' element={<Main0512/>}/>
          <Route path='/Main0525' element={<Main0525/>}/>
          
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
