import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { MessgeData } from '../../data';
import Detail from './../Detail';

export default class Messge extends Component {
  state = {
    messgeArr: MessgeData,
  };

  pushShow = item => {
    this.props.history.push(
      `/home/messge/detail?id=${item.id}&&title${item.title}`
    );
  };
  replaceShow = item => {
    this.props.history.replace(
      `/home/messge/detail?id=${item.id}&&title${item.title}`
    );
  };

  render() {
    const { messgeArr } = this.state;
    return (
      <div>
        {' '}
        <ul>
          {messgeArr.map(item => {
            return (
              <li key={item.id}>
                <Link
                  replace
                  to={`/home/messge/detail?id=${item.id}&&title${item.title}`}>
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
          path={'/home/messge/detail'}
          render={props => <Detail {...props} type="messge"></Detail>}></Route>
      </div>
    );
  }
}
