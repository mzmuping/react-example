import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        About
        <Outlet />
      </div>
    );
  }
}
