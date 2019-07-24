import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  shouldComponentUpdate(props, state) { // 使用生命周期函数提升组件性能
    return props.item !== this.props.item;
  }

  componentWillUnmount() { // 当组件被销毁时执行
    console.log('children componentWillUnmount()');
  }

  handleDelete() {
    const {deleteItem, index} = this.props;
    deleteItem(index);
  }

  render() {
    const {item, defaultValue} = this.props; // 如果父组件不给自组件传递 defaultValue 属性，则使用自组件定义的defaultProps中的值
    return (
      <li onClick={this.handleDelete}>
        {item ? item : defaultValue}
      </li>
    );
  }
}

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
};

TodoItem.defaultProps = {
  defaultValue: 'Default Value'
};

export default TodoItem;
