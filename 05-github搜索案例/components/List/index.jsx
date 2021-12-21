import React, { Component } from 'react';
import './index.scss';
export default class List extends Component {
  render() {
    const { users, isFirst, loading, err } = this.props;
    console.log(users, isFirst, loading, err);
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
