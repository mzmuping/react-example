import React from 'react';
import './style.css'
export default class Life extends React.Component {
    state = {
        name: 'sfs',
        lists: [],
    }
    interTime = null;
    listRef = React.createRef();

    componentDidMount() {
        console.log('挂载后');
        this.interTime = setInterval(() => {
            let { lists } = this.state;
            let news = '新闻' + (lists.length + 1)
            this.setState({ ...this.state, lists: [news, ...lists] })
            if (lists.length >= 100) {
                clearInterval(this.interTime)
                this.interTime = null;
            }
        }, 1000)
    }
    //更新前快照，参数 前state,前props
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 我们是否在 list 中添加新的 items ？
        // 捕获滚动​​位置以便我们稍后调整滚动位置。
        // if (prevProps.name < this.props.list.length) {
        //     const list = this.listRef.current;
        //     return list.scrollHeight - list.scrollTop;
        // }
        if (prevState.lists.length < this.state.lists.length) {
            const list = this.listRef.current;

            return list.scrollHeight - list.scrollTop;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }
    }

    componentWillUnmount() {
        // console.log('卸载前');
        clearInterval(this.interTime)
    }
    render() {
        // console.log('render');
        return <>
            <div className='list' ref={this.listRef}>
                {
                    this.state?.lists.map((item, index) => {
                        return <div key={index}>{item}</div>
                    })
                }
            </div>
            name: {this.state.name}
            <div onClick={() => { this.setState({ name: '发顺丰f' }) }}>我是生命周期</div>
            <Count />
        </>
    }

}

class Count extends React.Component {

    render() {
        return <>
            <div>我是生命周期</div>
        </>
    }

}