import React from 'react'


// const deleteList = (i) => {
//   deleteList(i)
//   localStorage.removeItem(i)
//   // index 1, index 2 삭제
//   arr.splice(1, 2);
// }

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