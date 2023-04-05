import React from 'react'

const TodoItem = ({item, deleteList}) => {
  const {id, text} = item;
  return (
    <div>
      <button  value={id} onClick={() => deleteList(id)}>X</button>
      {text}
    </div>
  )
}

export default TodoItem