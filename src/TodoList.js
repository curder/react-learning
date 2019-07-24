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

  // 组件生命周期：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  componentWillMount() { // 组件即将被挂载到页面时执行
    console.log('componentWillMount()');
  }

  componentDidMount() { // 组件被挂载到页面后被执行
    console.log('componentDidMount()');
  }

  shouldComponentUpdate() { // 组件被更新之前被执行
    console.log('shouldComponentUpdate()');
    return true; // 生命周期函数 shouldComponentUpdate 必须返回一个bool值，允许或阻止组件更新
  }

  componentWillUpdate() { // 组件被更新之前执行 Tips: 当 shouldComponentUpdate 返回 true，才执行；如果 shouldComponentUpdate 返回 false，则不执行
    console.log('componentWillUpdate()');
  }

  componentDidUpdate() { // 组件被更新后执行 Tips: 当 shouldComponentUpdate 返回 true，才执行；如果 shouldComponentUpdate 返回 false，则不执行
    console.log('componentDidUpdate()');
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
