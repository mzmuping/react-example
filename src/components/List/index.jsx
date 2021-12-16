import React, { Component } from "react";
import Item from "../Item";
export default class List extends Component {
  render() {
    return (
      <div>
        {this.props?.lists?.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
    );
  }
}
