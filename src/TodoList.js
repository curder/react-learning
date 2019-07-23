import React, { Component, Fragment } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
  }

  handleSubmit() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
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
          <input
            value={this.state.inputValue}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
