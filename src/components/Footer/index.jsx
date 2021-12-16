import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 <input type="checkbox" name="vehicle" value="Car" />
                 已完成0/全部
                 <button>清除全部完成任务</button>
            </div>
        )
    }
}
