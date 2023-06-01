import React from "react";

const TodoItem = ({ item, deleteList, index }) => {
  const { id, text, check } = item;
  return (
    <div className="projectTodoItem">
      [{index + 1}]
      <div className="projectItem" style={{color : check?"red":"black", border : check?"red 1px solid":""}}>
        <button className="deleteBtn" onClick={() => deleteList(index)}>
          완료
        </button>
        {text}
        <span className="projectTodoCounter">{id}</span>
      </div>
    </div>
  );
};

export default TodoItem;
