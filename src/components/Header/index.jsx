import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Header extends Component {
  back = () => {
    this.props.history.goBack();
  };
  forword = () => {
    this.props.history.goForward();
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.back();
          }}>
          后退
        </button>
        <button
          onClick={() => {
            this.forword();
          }}>
          前进
        </button>
      </div>
    );
  }
}

export default withRouter(Header);
