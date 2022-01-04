import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './index.less';
import Detail from './../Detail';
import Data from '../../data';
export default class News extends Component {
  state = {
    newsArr: Data,
  };

  pushShow = item => {
    this.props.history.push(`/home/news/detail/${item.id}/${item.title}`);
  };
  replaceShow = item => {
    this.props.history.replace(`/home/news/detail/${item.id}/${item.title}`);
  };
  render() {
    const { newsArr } = this.state;
    return (
      <div>
        <ul>
          {newsArr.map(item => {
            return (
              <li key={item.id}>
                <Link replace to={`/home/news/detail/${item.id}/${item.title}`}>
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
          path={'/home/news/detail/:id/:title'}
          render={props => <Detail {...props} type="news"></Detail>}></Route>
      </div>
    );
  }
}
