import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './index.scss';
export default class Header extends Component {
  //类型检测
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  handleKeyUp = event => {
    const { keyCode, target } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === '') {
      alert('不能为空');
      return;
    }
    const id = nanoid();
    let todo = {
      id: id,
      name: target.value,
      done: false,
    };
    this.props.addTodo(todo);
    target.value = '';
  };
  render() {
    return (
      <div className="header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入" />
      </div>
    );
  }
}
