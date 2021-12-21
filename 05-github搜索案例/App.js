import React, { Component } from 'react'
import List from './components/List';
import Search from "./components/Search"
export default class App extends Component {
    state = {
        users: [],
        isFirst: true,
        loading: false,
        err: ''
    }

    updateState = (stateOjb) => {
        this.setState({ ...stateOjb })
    }
    render() {
        return (
            <div>

                <Search updateState={this.updateState} ></Search>
                <List {...this.state}></List>
            </div>
        )
    }
}
