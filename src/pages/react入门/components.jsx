import React, { Component } from "react";

//函数类组件

export function MyCom1(props) {
  return <div>welcome React1 {props.name}</div>;
}

//基于类
export class MyCom2 extends Component {
  render() {
    return <div>welcome React2 {this.props.name}</div>;
  }
}
