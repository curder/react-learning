import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      list: [],
      inputValue: ""
    };
  }

  handleSubmit() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">输入内容</label>
          <input
            id="inputArea"
            value={this.state.inputValue}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                key={index}
                index={index}
                deleteItem={this.handleDelete}
                item={item}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
