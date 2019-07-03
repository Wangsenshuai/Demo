import React from "react";
// import logo from "./logo.svg";
import "./App.css";
//导入路由相关组件
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

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

class App extends React.Component {
  constructor(props) {
    super(props);
  }
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
                <Link
                  to="/"
                  className={
                    this.state.clickRoute === "Clock"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  Clock
                </Link>
                <Link
                  to="/StateTest"
                  className={
                    this.state.clickRoute === "StateTest"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  StateTest
                </Link>
                <Link
                  to="/CartSample"
                  className={
                    this.state.clickRoute === "CartSample"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  CartSample
                </Link>
                <Link
                  to="/MyCar"
                  className={
                    this.state.clickRoute === "MyCar"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  MyCar
                </Link>
                <Link
                  to="/AntdTest"
                  className={
                    this.state.clickRoute === "AntdTest"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  AntdTest
                </Link>
                <Link
                  to="/Hoc"
                  className={
                    this.state.clickRoute === "Hoc"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  Hoc
                </Link>
                <Link
                  to="/WelcomeDialog"
                  className={
                    this.state.clickRoute === "WelcomeDialog"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  WelcomeDialog
                </Link>
                <Link
                  to="/HookTest"
                  className={
                    this.state.clickRoute === "HookTest"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  HookTest
                </Link>
                <Link
                  to="/ContextTest"
                  className={
                    this.state.clickRoute === "ContextTest"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  ContextTest
                </Link>
                <Link
                  to="/KForm"
                  className={
                    this.state.clickRoute === "KForm"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  KForm
                </Link>
                <Link
                  to="/Reduxtest"
                  className={
                    this.state.clickRoute === "Reduxtest"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  Reduxtest
                </Link>
                <Link
                  to="/Routersample"
                  className={
                    this.state.clickRoute === "Routersample"
                      ? "route-click"
                      : "route-no-click"
                  }
                  onClick={this.click2Route}
                >
                  Routersample
                </Link>
              </div>
              <Switch>
                <Route exact path="/" component={Clock} />
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
                <Route exact path="/Routersample" component={Routersample} />
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
