import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.textInput = React.createRef(); // https://reactjs.org/docs/refs-and-the-dom.html

    this.state = {
      list: [],
      inputValue: ""
    };
  }

  handleSubmit() { // 处理提交事件，将input框中的数据提交到state对象中的list中
    this.setState((state, props) => {
      return {
        list: [...state.list, state.inputValue],
        inputValue: ""
      }
    });
  }

  handleDelete(index) {
    this.setState((state, props) => {
      const list = [...state.list];
      list.splice(index, 1);
      return {
        list
      }
    });
  }

  handleChange(e) {
    const inputValue = this.textInput.current.value; // 将修改的值赋值给临时变量，方便下面的异步函数的使用
    this.setState(() => {
        return {inputValue};
      }
    );
  }

  render() {
    const {inputValue, list} = this.state;

    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">输入内容</label>
          <input
            ref={this.textInput}
            id="inputArea"
            value={inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <ul>
          {list.map((item, index) => {
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
