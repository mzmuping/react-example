import React, { Component } from 'react';
import { Link, NavLink, Route, Redirect } from "react-router-dom";
import MyNavLink from './components/MyNavLink';
import Home from './pages/Home'
import About from './pages/About'
export default class App extends Component {

    render() {
        return (
            <div className='main'>
                <div className='left'>
                    <MyNavLink to="/about" activeClassName='active'>
                        <div>about</div>
                    </MyNavLink>
                    <MyNavLink to="/home">
                        <div>home</div>
                    </MyNavLink>
                </div>
                <div className='rigth'>
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                    <Redirect to="/home" />
                </div>
            </div >
        )
    }
}
