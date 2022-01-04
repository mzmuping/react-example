import React, { Component } from 'react';
import store from '../../utils/mini-redux/store';
import {
  createInCrementAction,
  craeteInDecrementAction,
  createIncrementSyncAction,
} from '../../utils/mini-redux/create_action';

export default class Count extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }
  addCount = () => {
    store.dispatch(createInCrementAction(2));
  };

  reduceCount = () => {
    store.dispatch(craeteInDecrementAction(2));
  };

  syncAddCount = () => {
    store.dispatch(createIncrementSyncAction(2));
  };
  render() {
    return (
      <div>
        <p>count:{store.getState()}</p>
        <button onClick={this.addCount}>加</button>
        <button onClick={this.reduceCount}>减</button>
        <button onClick={this.syncAddCount}>异步加</button>
      </div>
    );
  }
}
