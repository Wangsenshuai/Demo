import React, { Component } from "react";

export default class StateTest extends Component {
  state = {
    counter: 1,
  };

  componentDidMount() {
    //不能直接修改
    // this.state.counter += 2

    //错误 批量操作  相同操作只会执行最后一次
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });
    // this.setState({
    //   counter: this.state.counter + 1,
    // });

    //正确 批量执行  用函数式
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    return <div>{this.state.counter}</div>;
  }
}
