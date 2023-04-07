import React, { useRef, useState } from 'react'
import TodoBoard from './component/TodoBoard';
import './TodoListNew.css';

function TodoListNew() {

  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [bgColorCount, setBgColorCount] = useState(0);

  const todoInput = document.getElementById("todoInput");
  const nextId = useRef(1);
  const addItem = () => {
    if (inputValue === "") { }
    else {
      const todo = {
        id: nextId.current, text: inputValue,
      };
      setTodoList(todoList.concat(todo));
      nextId.current += 1;
    }
    todoInput.value = '';
    setInputValue('');
    todoInput.focus();
  }
  const deleteList = (id) => {
    setTodoList(todoList.filter((value, index) => index !== id));
  }

  const enterKey = () => {
    if (window.event.keyCode === 13) {
      addItem();
    }
  }
  const deleteAll = () => {
    setTodoList([]);
    todoInput.focus();
  }
  const clearAll = () => {
    setTodoList([]);
    nextId.current = 1;
    todoInput.focus();
  }
  const changeBgColor = () => {
    setBgColorCount(bgColorCount + 1);
    if(bgColorCount%2 === 1){
      document.body.style.backgroundColor = "lightyellow";
    }
    else{
      document.body.style.backgroundColor = "lightgray";
    }
  }
  const bgColorWhite = () => {
    document.body.style.backgroundColor = "white";
  }
  return (
    <div className="TodoListNew">
      <input type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        id="todoInput"
        onKeyUp={enterKey}
      />
      <button onClick={addItem}>추가!!</button><br/><br/>
      <button onClick={deleteAll}>전체 삭제</button>
      <button onClick={changeBgColor}>배경색 변경</button>
      <button onClick={bgColorWhite}>배경색 화이트</button><br/><br/>
      <button onClick={clearAll}>초기화</button>
      <TodoBoard todoList={todoList} deleteList={deleteList} />
    </div>
  );
}

export default TodoListNew;
