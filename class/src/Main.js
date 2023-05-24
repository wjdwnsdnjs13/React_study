import React from 'react'
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>hi</h1>
      <Link to="/main0317">2주차</Link><br/>
      <Link to="/main0324">3주차</Link><br/>
      <Link to="/Main0330">4주차</Link><br/>
      <Link to="/todoList">todoList(과제)</Link><br/>
      <Link to="/Main0406">5주차</Link><br/>
      <Link to="/todoListNew">todoListNew(과제)</Link><br/>
      <Link to="/Main0413">6주차</Link><br/>
      <Link to="/Main0414">6주차2</Link><br/>
      <Link to="/Clock">시계</Link><br/>
      <Link to="/Main0504">9주차</Link><br/>
      <Link to="/Main0511">10주차</Link><br/>
      <Link to="/Main0512">10주차2</Link><br/>
    </div>
  )
}

export default Main
