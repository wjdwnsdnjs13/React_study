import React, { Component } from "react";
import TodoItemClass from "./TodoItemClass";

// rcc 하면 class형 가져옴.
export default class TodoBoardClass extends Component {
  render() {
    return (
      <div>
        <h2>오늘의 할 일</h2>
        {this.props.todoList.map((item, index) => (
          <TodoItemClass
            item={item}
            index={index}
            key={item.id}
            deleteList={this.props.deleteList}
          />
        ))}
      </div>
    );
  }
}
