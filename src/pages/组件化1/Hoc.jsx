import React, { Component } from "react";

const WithLog = Comp => {
  console.log(Comp.name + "渲染了111");
  return props => <Comp {...props} />;
};

const withKaiKeba = Comp => {
  //Comp 是 withKaiKeba接收的新组件
  const name = "高阶组件";
  //需要返回函数
  console.log("do soming");
  return props => {
    return <Comp {...props} name={name} />;
  };
};

// function KaiKeba(props) {
//   //stage定死  name动态获取
//   return (
//     <div>
//       {props.stage}-{props.name}
//     </div>
//   );
// }

@WithLog
@withKaiKeba
@WithLog
class KaiKeba extends Component {
  render() {
    return (
      <div>
        {this.props.stage}-{this.props.name}
      </div>
    );
  }
}

// const NewKaikeba = WithLog(withKaiKeba(WithLog(KaiKeba)));

export default class Hoc extends Component {
  render() {
    return (
      <div>
        <KaiKeba stage="React" />
      </div>
    );
  }
}
