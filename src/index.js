import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter, Routes, Redirect, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import './app.less'
import store from './utils/mini-redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode >
    , document.getElementById('root'));

