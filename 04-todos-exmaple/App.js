
import React, { Component } from 'react'
import List from './components/List'
import Footer from './components/Footer'
import Header from './components/Header'

export default class App extends Component {
    /**
     * 状态在哪里，操作状态的方法就在哪里
     */
    //初始化状态
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
        ]
    }
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({
            todos: newTodos
        })
    }
    //更新todo状态
    updateDone = (id, done) => {
        let { todos } = this.state;
        let newTodos = todos.map(item => {
            if (item.id === id) return { ...item, done }
            else return item
        })
        this.setState({
            todos: newTodos
        })
    }
    //删除
    deleteItem = (id) => {
        if (!window.confirm("确定删除吗")) return

        const { todos } = this.state;
        const newTodos = todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos: newTodos
        })
    }
    //
    handleCheckAll = (isAll) => {
        const { todos } = this.state;
        const newTodos = todos.map(item => {
            item.done = isAll ? true : false
            return item
        })
        this.setState(newTodos)
    }

    deleteAll = () => {
        const { todos } = this.state;
        if (todos.length <= 0) return
        if (window.confirm("确定删除已完成吗")) {
            const newTodo = todos.filter(item => !item.done)
            this.setState({ todos: newTodo })
        };
    }

    render() {
        let { todos } = this.state;
        return (
            <div>
                <div>
                    <Header addTodo={this.addTodo}></Header>
                    <List todos={todos} updateDone={this.updateDone} deleteItem={this.deleteItem}></List>
                    <Footer todos={todos} handleCheckAll={this.handleCheckAll} deleteAll={this.deleteAll}></Footer>
                </div>
            </div>
        )
    }
}
