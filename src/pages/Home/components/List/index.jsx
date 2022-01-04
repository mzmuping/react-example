import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './index.less';
import Detail from '../Detail';
import Data from '../../data';
export default class News extends Component {
  state = {
    newsArr: Data,
  };
  pushShow = item => {
    this.props.history.push(`/home/list/detail`, { ...item });
  };
  replaceShow = item => {
    this.props.history.replace(`/home/list/detail`, { ...item });
  };
  render() {
    const { newsArr } = this.state;
    return (
      <div>
        <ul>
          {newsArr.map(item => {
            return (
              <li key={item.id}>
                <Link
                  replace
                  to={{
                    pathname: '/home/list/detail',
                    state: { id: item.id },
                  }}>
                  {item.title}
                </Link>
                &nbsp;
                <button
                  onClick={() => {
                    this.pushShow(item);
                  }}>
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => {
                    this.replaceShow(item);
                  }}>
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        <Route
          path={'/home/list/detail'}
          render={props => <Detail {...props} type="list"></Detail>}></Route>
      </div>
    );
  }
}
