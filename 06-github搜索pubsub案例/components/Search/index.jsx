import React, { Component, useRef } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';
import './index.less';

export default class index extends Component {
  keyWordElementRef = React.createRef();
  search = () => {
    // this.props.updateState({ isFirst: false, loading: true });
    PubSub.publish('updateList', { isFirst: false, loading: true });
    const { value } = this.keyWordElementRef.current;

    axios
      .get(`https://api.github.com/search/users?q=${value}`)
      .then(res => {
        // this.props.updateState({ loading: false, users: res.data.items });
        PubSub.publish('updateList', { loading: false, users: res.data.items });
      })
      .catch(err => {
        console.log('err==============');
        // this.props.updateState({ loading: false, err: err });
        PubSub.publish('updateList', { loading: false, err: err });
      });
  };

  render() {
    return (
      <div>
        <p>搜索github用户</p>
        <input
          type="text"
          placeholder="请输入...."
          ref={this.keyWordElementRef}
        />
        <button onClick={this.search}>搜索</button>
      </div>
    );
  }
}
