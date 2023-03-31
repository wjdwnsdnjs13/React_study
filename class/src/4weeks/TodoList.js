import React, { useState } from 'react'
import TodoBoard from './component/TodoBoard';

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const addItem = ()=>{
        setTodoList([...todoList, inputValue]);
        // console.log('inputValue : ', inputValue);
    }
    return (
        <div>
            <input type="text" onChange={(e) => {
                console.log(e.target.value);
                setInputValue(e.target.value);
                }}/>
            <button onClick={addItem}>추가!!</button>
            <TodoBoard todoList={todoList}/>
        </div>
    )
}

export default TodoList;