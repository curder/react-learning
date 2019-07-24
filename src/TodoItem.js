import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const {deleteItem, index} = this.props;
    deleteItem(index);
  }

  render() {
    const {item} = this.props;
    return (
      <li onClick={this.handleDelete}>
        {item}
      </li>
    );
  }
}

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default TodoItem;
