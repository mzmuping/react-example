import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class About extends Component {
  render() {
    console.log(this.props);
    return <div>About</div>;
  }
}
