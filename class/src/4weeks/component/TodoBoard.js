import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = ({ todoList, deleteList }) => {
  // const deletelist = () => {{deleteList}}
  let i = 0;
  return (
    <div>
      <h2>오늘의 할 일</h2>
      {todoList.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          deleteList={deleteList}
        />
      ))}
    </div>
  )
}

export default TodoBoard
