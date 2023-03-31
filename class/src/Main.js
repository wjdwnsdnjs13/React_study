import React from 'react'
import { BrowserRouter, Link, useNavigate } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>hi</h1>
      <Link to="/main0317">2주차</Link><br/>
      <Link to="/main0324">3주차</Link><br/>
      <Link to="/main0330">4주차</Link><br/>
      <Link to="/todoList">todoList(과제)</Link><br/>
    </div>
  )
}

export default Main
