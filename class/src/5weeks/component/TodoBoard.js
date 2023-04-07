import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = ({ todoList, deleteList }) => {
  return (
    <div>
      <h2>오늘의 할 일</h2>
      {todoList.map((item, index) => (
        <TodoItem
          item={item}
          index={index}
          key={item.id}
          deleteList={deleteList}
        />
      ))}
    </div>
  )
}

export default TodoBoard
