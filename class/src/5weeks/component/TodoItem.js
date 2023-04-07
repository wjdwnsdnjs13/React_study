import React from "react";

const TodoItem = ({ item, deleteList, index }) => {
  const { id, text } = item;
  return (
    <div className="todoItem">
      [{index + 1}]
      <div className="item">
        <button className="deleteBtn" onClick={() => deleteList(index)}>
          X
        </button>
        {text}
        <span className="todoCounter">{id}</span>
      </div>
    </div>
  );
};

export default TodoItem;
