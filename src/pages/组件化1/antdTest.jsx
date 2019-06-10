import React, { Component } from "react";
//不装插件倒入antd
// import Button from "antd/lib/button";
// import "antd/dist/antd.css";

//配置按需加载 第三方库组件
//1.根据官方文档 下载
//yarn add react-app-rewired customize-cra
//yarn add babel-plugin-import

//2.根目录创建config-overrides.js文件 进行webpack覆盖配置 并修改package.json文件

//3.然后按需具名引入即可
import { Button } from "antd";

export default class AntdTest extends Component {
  render() {
    return (
      <div>
        AntdTest
        <Button type="primary">Button</Button>
      </div>
    );
  }
}
