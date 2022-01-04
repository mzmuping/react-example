import React, { Component } from 'react';
import store from '../../utils/mini-redux/store';

export default class Count extends Component {
  componentDidMount() {
    store.subscribe(() => {
      // this.setState({});
    });
  }
  addCount = () => {
    this.props.add(2);
  };

  reduceCount = () => {
    this.props.reduce(2);
  };

  syncAddCount = () => {
    this.props.syncAdd(2, 1000);
  };

  render() {
    return (
      <div>
        <p>count:{this.props.count}</p>
        <button onClick={this.addCount}>加</button>
        <button onClick={this.reduceCount}>减</button>
        <button onClick={this.syncAddCount}>异步加</button>
      </div>
    );
  }
}
