import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter, Routes, Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './utils/mini-redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Provider>
    </React.StrictMode >
    , document.getElementById('root'));

