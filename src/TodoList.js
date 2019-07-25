import React, { Component, Fragment } from 'react';
import { Input, List } from 'antd';
import 'antd/dist/antd.css';
import store from './store';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange); // 订阅store的变更，当发生了变化执行回调
  }

  handleInputChange(e) { // 处理输入框输入事件
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleInputSubmit() { // 处理输入框提交事件
    const action = {
      type: 'todo_item_submit',
      value: this.state.inputValue
    };
    store.dispatch(action);
  }

  handleStoreChange() { // 当store发生变化，修改组件状态
    this.setState(() => {
      return store.getState();
    })
  }

  render() {
    const {Search} = Input;
    return (
      <Fragment>
        <div style={{display: "flex", alignItems: "center", justifyContent: 'center'}}>
          <div style={{width: 400, marginTop: 100}}>
            <Search placeholder="Todo内容"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    enterButton="提交"
                    size="large"
                    onSearch={this.handleInputSubmit}/>
            <List
              style={{marginTop: '10px'}}
              bordered
              dataSource={this.state.list}
              renderItem={item => (
                <List.Item key={item}>
                  <div>{item}</div>
                </List.Item>
              )}>
            </List>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TodoList;
