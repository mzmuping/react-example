import React, { Component } from 'react';
// import PubSub from 'pubsub-js';
import PubSub from '../../pubsub';
import './index.less';
console.log(PubSub);

export default class index extends Component {
  keyWordElementRef = React.createRef();
  search = async () => {
    PubSub.publish('updateList', { isFirst: false, loading: true });
    const { value } = this.keyWordElementRef.current;
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${value}`);
      const data = await res.json();

      PubSub.publish('updateList', { loading: false, users: data.items || [] });
    } catch (err) {
      PubSub.publish('updateList', { loading: false, err: false });
    }
  };

  clear = () => {
    PubSub.unsubscribe('updateList');
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
        <button onClick={this.clear}>清除</button>
      </div>
    );
  }
}
