import React, { Component } from "react";
//导入路由相关组件
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "./../../user";

function Home(props) {
  return (
    <div>
      <h3>课程列表</h3>
      <ul>
        <li>
          {/* 动态传参 */}
          <Link to="/Routersample/detail/vue">vue</Link>
        </li>
        <li>
          <Link to="/Routersample/detail/react">react</Link>
        </li>
        <li>
          <Link to="/Routersample/detail/react">ng</Link>
        </li>
      </ul>
    </div>
  );
}

function About(props) {
  return (
    <div>
      <h3>个人中心</h3>
      {/* 路由嵌套 */}
      <div>
        <Link to="/Routersample/about/me">个人信息</Link>
        <Link to="/Routersample/about/order">订单查询</Link>
      </div>
      <Switch>
        <Route path="/Routersample/about/me" component={() => <div>Me</div>} />
        <Route path="/Routersample/about/order" component={() => <div>Order</div>} />

        {/* 重定向   设置默认项 */}
        <Redirect to="/Routersample/about/me" />
      </Switch>
    </div>
  );
}

//传递进来路由信息
function Detail(props) {
  //1.history:导航指令   命令式导航时
  //2.match:获取参数信息   路由动态参数由此获取
  //3.location:当前url信息
  console.log(props)
  return (
    <div>
      我是{props.match.params.course}
      <button onClick={props.history.goBack}>后退</button>
    </div>
  );
}

//路由守卫
//希望用法：<PrivateRoute component={About} path='/about' ...></PrivateRoute>
const PrivateRoute = connect(state => ({
  isLogin: state.user.isLogin,
}))(({ component: Comp, isLogin, ...rest }) => {
  //认证
  //render ：根据条件动态渲染组件
  console.log('isLogin',isLogin);
  
  return (
    <Route
      {...rest}
      render={props =>
        isLogin ? (
          <Comp />
        ) : (
          <Redirect
            to={{
              pathname: "/Routersample/login",
              state: { redirect: props.location.pathname },
            }}
          />
        )
      }
    />
  );
});

const Login = connect(
  state => ({
    isLogin: state.user.isLogin,
    loading: state.user.loading,
  }),
  { login }
)(({ location, isLogin, login, loading }) => {
  const redirect = location.state.redirect || "/";
  if (isLogin) {
    return <Redirect to={redirect} />;
  }
  return (
    <div>
      <p>用户登陆</p>
      <hr />
      <button onClick={login} disabled={loading}>
        登陆
      </button>
    </div>
  );
});

//404页面
function NoMatch({ location }) {
  return <div>404{location.pathname}不存在</div>;
}

export default class Routersample extends Component {
  render() {
    console.log(123);
    
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* 导航链接 */}
            <div>
              <Link to="/Routersample">首页</Link>
              <Link to="/Routersample/about">关于</Link>
            </div>

            {/* 路由的配置 */}
            {/* 路由匹配默认时包容性质，意思时只要path的字段出现就符合条件 eg： /  和 /about   都会展示 都出现/ */}
            {/* 用switch组件确保只匹配一个 */}
            <Switch>
              {/* exact保证只显示 / 路由匹配的组件 */}
              <Route exact path="/Routersample" component={Home} />

              {/* 动态传参  类似vue */}
              <Route exact path="/Routersample/detail/:course" component={Detail} />
              {/* <Route path="/about" component={About} /> */}
              <PrivateRoute path="/Routersample/about" component={About} />

              {/* 登陆 */}
              <Route path="/Routersample/login" component={Login} />

              {/* 路由都不匹配 404页面  此路由必须放在最底层 */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
