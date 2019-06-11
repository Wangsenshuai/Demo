import React, { Component } from "react";

function KaiKeba(props) {
  //stage定死  name动态获取
  return (
    <div>
      {props.stage}-{props.name}
    </div>
  );
}

const withKaiKeba = Comp => {
  //Comp 是 withKaiKeba接收的新组件
  const name = "高阶组件";
  //需要返回函数

  return props => {
    return <Comp {...props} name={name} />;
  };
};

const NewKaikeba = withKaiKeba(KaiKeba);

export default class Hoc extends Component {
  render() {
    return (
      <div>
        <NewKaikeba stage="React" />
      </div>
    );
  }
}
