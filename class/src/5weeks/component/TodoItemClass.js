import React, { Component } from "react";

export default class TodoItemClass extends Component {
  render() {
    const { id, text } = this.props.item;
    return (
      <div className="todoItem">
        <button
          value={id}
          onClick={() => this.props.deleteList(this.props.index)}
        >
          X
        </button>
        {text}
      </div>
    );
  }
}
