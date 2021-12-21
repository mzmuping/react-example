import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.scss';
export default class List extends Component {
  state = {
    users: [],
    isFirst: true,
    loading: false,
    err: '',
  };
  subscribeId = null;
  componentDidMount() {
    this.subscribeId = PubSub.subscribe('updateList', (_, data) => {
      this.setState(data);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.subscribeId);
  }

  render() {
    const { users, isFirst, loading, err } = this.state;
    return (
      <div className="lists">
        {isFirst
          ? '请搜索数据'
          : loading
          ? 'loading.....'
          : err
          ? '搜索不到数据'
          : users.map(item => {
              return (
                <a
                  key={item.id}
                  className="item"
                  href={item.html_url}
                  target="_blank"
                  rel="noreferrer">
                  <img src={item.avatar_url} alt="avatar" />
                  <p>{item.login}</p>
                </a>
              );
            })}
      </div>
    );
  }
}
