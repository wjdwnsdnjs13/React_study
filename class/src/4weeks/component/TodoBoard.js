import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = (props) => {
  return (
    <div>
      <h2>오늘의 할 일</h2>
      {props.todoList.map((item) => <TodoItem item={item}/>)}
    </div>
  )
}

export default TodoBoard
