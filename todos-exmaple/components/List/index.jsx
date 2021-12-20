import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Item from '../Item';
export default class List extends Component {
  // 检测
  static propTypes = {
    updateDone: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  };
  render() {
    const { todos, updateDone, deleteItem } = this.props;
    return (
      <div>
        {todos.map(item => {
          return (
            <Item
              key={item.id}
              {...item}
              updateDone={updateDone}
              deleteItem={deleteItem}></Item>
          );
        })}
      </div>
    );
  }
}
