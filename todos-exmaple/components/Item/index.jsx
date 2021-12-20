import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

export default class Litem extends Component {
  state = { flat: false };
  static propTypes = {
    updateDone: PropTypes.func.isRequired,
  };
  onMouseEnter = flat => {
    return e => {
      this.setState({
        flat,
      });
    };
  };
  onMouseLeave = flat => {
    return e => {
      this.setState({
        flat,
      });
    };
  };

  //更新状态
  updateDone = id => {
    return event => {
      this.props.updateDone(id, event?.target?.checked);
    };
  };
  // 删除
  deleteItem(id) {
    this.props.deleteItem(id);
  }

  render() {
    const { id, name, done } = this.props;
    const { flat } = this.state;
    return (
      <li
        style={{ background: flat ? '#eee' : '#fff' }}
        onMouseEnter={this.onMouseEnter(true)}
        onMouseLeave={this.onMouseLeave(false)}>
        <label>
          <input
            type="checkbox"
            onChange={this.updateDone(id)}
            checked={done}
          />
          {name}
        </label>
        <button
          className={classNames('delete', flat ? 'show' : 'hide')}
          onClick={() => {
            this.deleteItem(id);
          }}>
          删除
        </button>
      </li>
    );
  }
}
