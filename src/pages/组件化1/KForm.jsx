import React, { Component } from "react";
import { Input, Button } from "antd";

//创建一个高阶组件：扩展现有表单，事件处理，数据收集，数据校验
function KFormCreat(Comp) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.options = {};
      this.state = {};
    }

    handleChange = e => {
      const { name, value } = e.target;
      // console.log(name, value);
      this.setState({ [name]: value }, () => {
        //放入回调，确保是准确的值
        this.validateField(name);
      });
    };

    //单项校验
    validateField = field => {
      const rules = this.options[field].rules;

      //只要有一个不符合规则就报错
      const ret = !rules.some(rule => {
        if (rule.required) {
          if (!this.state[field]) {
            //校验失败
            this.setState({ [field + "Message"]: rule.message });
            return true;
          }
        }
      });
      console.log("单项", ret);

      if (ret) {
        //校验成功
        this.setState({ [field + "Message"]: "" });
        //校验返回成功，在全部校验中用得到
        return true;
      }
    };

    //全部校验
    validate = cb => {
      const rets = Object.keys(this.options).map(field => {
        return this.validateField(field);
      });
      console.log("全部", Object.keys(this.options));

      const ret = rets.every(v => v === true);

      cb(ret, this.state);
    };

    //创建input包装器
    getFieldDec = (field, option) => {
      //保存当前输入项的配置
      this.options[field] = option;
      return InputComp => (
        <div>
          {React.cloneElement(InputComp, {
            name: field,
            value: this.state[field] || "",
            onChange: this.handleChange,
          })}
          {/* 错误信息 */}
          {this.state[field + "Message"] && (
            <p style={{ color: "red" }}>{this.state[field + "Message"]}</p>
          )}
        </div>
      );
    };

    render() {
      return <Comp getFieldDec={this.getFieldDec} validate={this.validate} />;
    }
  };
}

//创建一个高阶组件：扩展现有表单，事件处理/数据收集/校验
//装饰器必须基于class组件
@KFormCreat
class KForm extends Component {
  onSubmit = () => {
    console.log(11);
    this.props.validate((isValid, data) => {
      console.log(isValid);

      if (isValid) {
        //提交登陆
        console.log("登陆", data);
      } else {
        alert("失败");
      }
    });
  };
  render() {
    const { getFieldDec } = this.props;
    return (
      <div>
        {getFieldDec("uname", {
          rules: [{ required: true, message: "账户必填" }],
        })(<Input />)}
        {getFieldDec("passWord", {
          rules: [{ required: true, message: "密码必填" }],
        })(<Input />)}

        <Button onClick={this.onSubmit}>点击</Button>
      </div>
    );
  }
}

export default KForm;
