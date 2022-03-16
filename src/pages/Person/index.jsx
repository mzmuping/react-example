import React, { Component } from 'react';

class Person extends Component {
  state = {
    name: '',
    age: '',
  };

  render() {
    return (
      <>
        <input
          onChange={e => {
            this.setState({ name: e });
          }}
          type={'text'}
          placeholder="输入名字"
        />
        <input
          onChange={e => {
            this.setState({ age: e });
          }}
          type={'text'}
          placeholder="输入年龄"
        />
        <button>添加</button>
        <ul>
          <li>名字1----年龄1</li>
          <li>名字2----年龄3</li>
          <li>名字3----年龄4</li>
        </ul>
      </>
    );
  }
}

export default Person;
