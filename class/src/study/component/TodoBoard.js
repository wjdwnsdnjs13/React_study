import React from 'react'
import TodoItem from './TodoItem'

const TodoBoard = ({ text, todoList, deleteList, complete }) => {
  return (
    <div>
      <h2>{text}</h2>
      {todoList.map((item, index) => complete ? (item.check ? <TodoItem
        item={item}
        index={index}
        key={item.id}
        check={item.check}
        deleteList={deleteList}
      /> : false) : (item.check ? false : <TodoItem
        item={item}
        index={index}
        key={item.id}
        check={item.check}
        deleteList={deleteList}
      />))}
    </div>
  )
}

export default TodoBoard
