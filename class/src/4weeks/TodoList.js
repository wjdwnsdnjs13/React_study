import React, { useRef, useState } from 'react'
import TodoBoard from './component/TodoBoard';

const TodoList = () => {

    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([{
        id: 0,
        text: '초기값',
        checked: true
    },]);


    const nextId = useRef(0);
    const addItem = () => {
        const todo = {
            id: nextId.current,
            text: inputValue,
            checker: false,
        };
        setTodoList(todoList.concat(todo));
        nextId.current += 1;
    }
    const deleteList = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    }
    return (
        <div>
            <input type="text" onChange={(e) => {
                console.log(e.target.value);
                setInputValue(e.target.value);
            }} />
            <button onClick={addItem}>추가!!</button>
            <TodoBoard todoList={todoList} deleteList={deleteList} />
        </div>
    )
}

export default TodoList;