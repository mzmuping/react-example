import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteAll: PropTypes.func.isRequired,
  };

  handleCheckAll = e => {
    this.props.handleCheckAll(e.target.checked);
  };

  deleteAll = e => {
    this.props.deleteAll();
  };

  render() {
    const { todos } = this.props;
    const total = todos.length;
    const doneCount = todos?.reduce(
      (pre, curValue) => (curValue.done ? pre + 1 : pre),
      0
    );
    const checked = total === doneCount && total > 0;
    return (
      <div className="footer">
        <label>
          <input
            type="checkbox"
            name="vehicle"
            checked={checked}
            onChange={this.handleCheckAll}
          />
          已完成{doneCount}/全部{total}
        </label>
        <button className="button" onClick={this.deleteAll}>
          清除完成任务
        </button>
      </div>
    );
  }
}
