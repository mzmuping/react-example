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
          ει
        </button>
        <button
          onClick={() => {
            this.forword();
          }}>
          εθΏ
        </button>
      </div>
    );
  }
}

export default withRouter(Header);
