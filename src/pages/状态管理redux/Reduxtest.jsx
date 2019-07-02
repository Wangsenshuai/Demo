import React, { Component } from "react";
//直接使用redux
// import store from "../../store";

//使用react-redux
import { connect } from "react-redux";
//mapStateToProps是自己定义的名字
const mapStateToProps = state => ({ num: state });
const mapDispatchToProps = {
  add: () => ({ type: "add" }),
  minus: () => ({ type: "minus" }),
  //异步操作
  asyncAdd: () => dispatch => {
    setTimeout(() => {
      dispatch({ type: "add" });
    }, 1500);
  },
};

//直接使用redux
// export default class Reduxtest extends Component {
//   render() {
//     return (
//       <div>
//         {/* 取值 */}
//         <p>{store.getState()}</p>
//         <div>
//           <button onClick={() => store.dispatch({ type: "minus" })}>
//             减少
//           </button>
//           <button onClick={() => store.dispatch({ type: "add" })}>增加</button>
//         </div>
//       </div>
//     );
//   }
// }

//1.使用react-redux  函数写法
//用connect高阶组件强化Reduxtest
//connect本身是构造函数，第一个()传入配置,这样Reduxtest就可以使用解构的相关方法
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Reduxtest);

// function Reduxtest({ num, add, minus }) {
//   return (
//     <div>
//       {/* 取值 */}
//       <p>{num}</p>
//       <div>
//         <button onClick={minus}>减少</button>
//         <button onClick={add}>增加</button>
//       </div>
//     </div>
//   );
// }

//2.使用react-redux  class+装饰器写法
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Reduxtest extends Component {
  render() {
    const { num, add, minus, asyncAdd } = this.props;
    return (
      <div>
        {/* 取值 */}
        <p>{num}</p>
        <div>
          <button onClick={minus}>减少</button>
          <button onClick={add}>增加</button>
          <button onClick={asyncAdd}>异步增加</button>
        </div>
      </div>
    );
  }
}
export default Reduxtest;
