import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter, Routes, Redirect, Switch, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import './app.less'
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App}></Route>
            </Switch>
        </BrowserRouter >
    </React.StrictMode >
    , document.getElementById('root'));