import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MyNavLink from 'src/components/MyNavLink';
import News from './components/News';
import Messge from './components/Messge';
import './index.less';
export default class Home extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        <h3>Home组件内容</h3>
        <ul>
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/messge">Messge</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/messge" component={Messge}></Route>
          <Redirect to="/home/news" />
        </Switch>
      </div>
    );
  }
}
