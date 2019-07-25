import React, { Component, Fragment } from 'react';
import { Input, List } from 'antd';
import 'antd/dist/antd.css';

const data = [
  "Learning VueJS",
  "Learning ReactJS",
];

class TodoList extends Component {
  render() {
    const {Search} = Input;
    return (
      <Fragment>
        <div style={{display: "flex", alignItems: "center", justifyContent: 'center'}}>
          <div style={{width: "400px", marginTop: "100px"}}>
            <Search placeholder="Todo内容"
                    enterButton="提交"
                    size="large"
                    onSearch={value => console.log(value)}/>

            <List
              style={{marginTop: '10px'}}
              bordered
              dataSource={data}
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
