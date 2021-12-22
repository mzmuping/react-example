import React, { Component } from 'react';
import MyNavLink from 'src/components/MyNavLink';
import './index.less';
export default class Home extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h3>Home组件内容</h3>
        <ul>
          <li>
            <MyNavLink to="/home/about">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/about">Messge</MyNavLink>
          </li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}
