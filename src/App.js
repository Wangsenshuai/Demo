import React from "react";
// import logo from "./logo.svg";
import "./App.css";
//导入路由相关组件
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// import { MyCom1, MyCom2 } from "./pages/react入门/components";
import Clock from "./pages/react入门/clock";
import StateTest from "./pages/react入门/stateTest";
import CartSample from "./pages/react入门/cartSample";
import MyCar from "./pages/react入门/myCar";
import AntdTest from "./pages/组件化1/antdTest";
import Hoc from "./pages/组件化1/Hoc";
import WelcomeDialog from "./pages/组件化1/WelcomeDialog";
import HookTest from "./pages/组件化1/HookTest";
import ContextTest from "./pages/组件化1/ContextTest";
import KForm from "./pages/组件化1/KForm";
import Reduxtest from "./pages/状态管理redux/Reduxtest";

import store from "./store";
import { Provider } from "react-redux";
import Routersample from "./pages/react-router-dom/Routersample";
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
// function defaultInfo(user) {
//   return user.name + " " + user.age;
// }

const routeCom = [
  "Clock",
  "StateTest",
  "CartSample",
  "MyCar",
  "AntdTest",
  "Hoc",
  "WelcomeDialog",
  "HookTest",
  "ContextTest",
  "KForm",
  "Reduxtest",
  "Routersample",
];
const routeComp = [
  Clock,
  StateTest,
  CartSample,
  MyCar,
  AntdTest,
  Hoc,
  WelcomeDialog,
  HookTest,
  ContextTest,
  KForm,
  Reduxtest,
  Routersample,
];

class App extends React.Component {
  state = {
    clickRoute: "Clock",
  };

  click2Route = e => {
    this.setState({ clickRoute: e.target.text });
  };

  render() {
    // const user = { name: "wss", age: "24" };
    return (
      <div className="app-wrapper">
        <div className="app-inner">
          <Provider store={store}>
            <BrowserRouter>
              <div className="router-group">
                {routeCom.map(e => (
                  <Link
                    to={"/" + e}
                    className={
                      this.state.clickRoute === e
                        ? "route-click"
                        : "route-no-click"
                    }
                    key={e}
                    onClick={this.click2Route}
                  >
                    {e}
                  </Link>
                ))}
              </div>
              <Switch>
                {routeCom.map((e, index) => (
                  <Route
                    path={"/" + e}
                    component={routeComp[index]}
                    key={e}
                  />
                ))}
                {/* <Route exact path="/" component={Clock} />
                <Route exact path="/StateTest" component={StateTest} />
                <Route exact path="/CartSample" component={CartSample} />
                <Route exact path="/MyCar" component={MyCar} />
                <Route exact path="/AntdTest" component={AntdTest} />
                <Route exact path="/Hoc" component={Hoc} />
                <Route exact path="/WelcomeDialog" component={WelcomeDialog} />
                <Route exact path="/HookTest" component={HookTest} />
                <Route exact path="/ContextTest" component={ContextTest} />
                <Route exact path="/KForm" component={KForm} />
                <Route exact path="/Reduxtest" component={Reduxtest} />
                <Route exact path="/Routersample" component={Routersample} /> */}
                
              </Switch>
            </BrowserRouter>
          </Provider>
        </div>

        {/* <p>{defaultInfo(user)}</p> */}
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
        {/* <Hoc /> */}

        {/* react插槽 */}
        {/* <WelcomeDialog /> */}

        {/* Hook */}
        {/* <HookTest /> */}

        {/* context组件通信 */}
        {/* <ContextTest /> */}

        {/* antd表单 */}
        {/* <AntdForm /> */}
        {/* <KForm /> */}

        {/*redux  provider起始就是上下文*/}
        {/* <Provider store={store}>
          <Reduxtest />
        </Provider> */}

        {/* react-router */}
        {/* <Provider store={store}>
          <Routersample />
        </Provider> */}
      </div>
    );
  }
}

export default App;
