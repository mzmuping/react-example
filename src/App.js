import React, { Component } from 'react';
import { Link, NavLink, Route, Redirect } from "react-router-dom";
import MyNavLink from './components/MyNavLink';
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Count from './pages/Count';
import Person from './pages/Person';
import ConCount from './containers/Count';
import './app.less'
import routes, { CreateRoute } from './routes';
import { Routes } from 'react-router';
export default class App extends Component {

  render() {
    return (
      <>
        <Header></Header>
        <div className='main'>
          <div className='left'>
            <MyNavLink to="/about">
              <div>about</div>
            </MyNavLink>
            <MyNavLink to="/home">
              <div>home</div>
            </MyNavLink>
          </div>
          <div className='rigth'>
            {
              routes?.map((route, i) => <CreateRoute key={i} {...route} />)
            }
            {/* <Route path='/about' component={About} />
            <Route path='/home' component={Home} />
            <Redirect to="/home" /> */}
          </div>
        </div>
        <Count></Count>
      </>
    )
  }
}
