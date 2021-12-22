import React, { Component } from 'react';
import { Link, Outlet } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className='left'>
                    <Link to="/about">
                        <div>about</div>
                    </Link>
                    <Link to="/home">
                        <div>home</div>
                    </Link>
                </div>
                <div className='rigth'>
                    <Outlet />
                </div>
            </div >
        )
    }
}
