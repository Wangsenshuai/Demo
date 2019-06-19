import React, { useContext } from "react";

//创建上下文
const MyContext = React.createContext();

const { Provider, Consumer } = MyContext;
console.log(MyContext);

function Child(props) {
  return <div>{props.foo}</div>;
}

//第二种 hook Child2
function Child2() {
  //假如不在一个文件中使用，可以单独简建立js文件到处MyContext，
  //只要保证同一个Context即可
  const ctx = useContext(MyContext);
  return <div>Child2:{ctx.foo}</div>;
}

class Child3 extends React.Component {
  //设置静态属性通知编译器获取上下文中数据并赋值给this.context
  static contextType = MyContext;
  render() {
    // 这里context变量名不可变
    return <div>Child3:{this.context.foo}</div>;
  }
}

export default function ContextTest() {
  return (
    <div>
      {/* 不解构provdier写法 */}
      {/* <myContext.Provider><Child /></myContext.Provider> */}

      {/* 解构provider */}
      <Provider value={{ foo: "bar" }}>
        {/* 第一种 解构Consumer消费者  和proider中间可以有多个层级嵌套 */}
        <div>
          <Consumer>{value => <Child {...value} />}</Consumer>
        </div>
        <div>
          <Consumer>{value => <Child {...value} />}</Consumer>
        </div>

        {/* 第二种 hook Child2*/}
        <Child2 />

        {/* 第三种 class写法 */}
        <Child3 />
      </Provider>
    </div>
  );
}
