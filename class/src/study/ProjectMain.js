import React, { useRef, useState } from 'react'
import TodoBoard from './component/TodoBoard';
import './ProjectMain.css';
import dailyJSON from "./dailyList";
import todoJSON from "./todoList";
import fs from "fs";




const ProjectMain = () => {

    const [dailyInputValue, setDailyInputValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [dailyList, setDailyList] = useState([]);
    const [todoList, setTodoList] = useState([]);
    const [completeList, setCompleteList] = useState([]);
    const [bgColorCount, setBgColorCount] = useState(0);

    const todoInput = document.getElementById("todoInput");
    const dailyInput = document.getElementById("dailyInput");
    const nextDailyId = useRef(1);
    const nextTodoId = useRef(1);
    const addDaily = () => {
        if (dailyInputValue === "") { }
        else {
            const todo = {
                id: nextDailyId.current, text: dailyInputValue,
            };
            setDailyList(dailyList.concat(todo));
            nextDailyId.current += 1;
        }
        dailyInput.value = '';
        setInputValue('');
        dailyInput.focus();
    }
    const addItem = () => {
        if (inputValue === "") { }
        else {
            const todo = {
                id: nextTodoId.current, text: inputValue,
            };
            setTodoList(todoList.concat(todo));
            nextTodoId.current += 1;
        }
        todoInput.value = '';
        setInputValue('');
        todoInput.focus();
    }
    const deleteList = (id) => {
        setCompleteList([...completeList, todoList.filter((value, index) => index == id)]);
        setTodoList(todoList.filter((value, index) => index !== id));
    }

    const enterKey = () => {
        if (window.event.keyCode === 13) {
            addItem();
        }
    }
    const dailyEnterKey = () => {
        if (window.event.keyCode === 13) {
            addDaily();
        }
    }
    const deleteAll = () => {
        setTodoList([]);
        todoInput.focus();
    }
    const clearAll = () => {
        setTodoList([]);
        nextTodoId.current = 1;
        todoInput.focus();
    }
    const dailyClear = () => {

        const dailyJson = dailyJSON.map(item => {
            item.check = false
        })
        fs.writeFile("./dailyList.json", JSON.stringify([
            {
                "id" : 1,
                "text" : "hi",
                "check" : true
            },
            {
                "id" : 2,
                "text" : "test",
                "check" : true
            }
        ]));

    }


    return (
        <>
        <div className="projectMain">
            <h1>Won's ToDoList!!</h1>
            <input type="text"
                onChange={(e) => {
                    setDailyInputValue(e.target.value);
                }}
                id="dailyInput"
                onKeyUp={dailyEnterKey}
            />
            <button onClick={addDaily}>추가!!</button><br /><br />
            <TodoBoard text="데일리 리스트" todoList={dailyJSON} deleteList={deleteList} complete={false} />

            <hr></hr>

            <input type="text"
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                id="todoInput"
                onKeyUp={enterKey}
            />
            <button onClick={addItem}>추가!!</button><br /><br />
            <button onClick={deleteAll}>전체 삭제</button>
            <button onClick={clearAll}>초기화</button>
            <TodoBoard text="ToDo 리스트" todoList={todoJSON} deleteList={deleteList} complete={false} />
        </div>
        <div className="projectMain">
            <h1>Complete List!</h1>
            <TodoBoard text="데일리 리스트" todoList={dailyJSON} deleteList={deleteList}  complete={true}/>
            <button onClick={dailyClear}>초기화</button>

            <hr></hr>
            <TodoBoard text="ToDo 리스트" todoList={todoJSON} deleteList={deleteList} complete={true} />

        </div>
        </>
    );
}

export default ProjectMain
