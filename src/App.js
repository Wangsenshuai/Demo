import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { MyCom1, MyCom2 } from "./pages/react入门/components";
// import Clock from "./pages/react入门/clock";
// import StateTest from "./pages/react入门/stateTest";
// import CartSample from "./pages/react入门/cartSample";
// import MyCar from "./pages/react入门/myCar";
// import AntdTest from "./pages/组件化1/antdTest";
import Hoc from "./pages/组件化1/Hoc";

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}

//     </div>
//   );
// }
function defaultInfo(user) {
  return user.name + " " + user.age;
}

class App extends React.Component {
  render() {
    const user = { name: "wss", age: "24" };
    return (
      <div>
        <p>{defaultInfo(user)}</p>
        {/* 组件初试 */}
        {/* <MyCom1 name="wx" /> */}
        {/* <MyCom2 name="wss" /> */}

        {/* 组件状态改变 */}
        {/* <Clock /> */}

        {/* state测试 */}
        {/* <StateTest /> */}

        {/* 条件渲染 */}
        {/* <CartSample /> */}
        {/* <MyCar title="我的testCar" /> */}

        {/* antddesi */}
        {/* <AntdTest /> */}

        {/* 高阶组件 */}
        <Hoc />
      </div>
    );
  }
}

export default App;
