import React from "react";

/* function Dialog(props) {
  console.log(props.children);
  //children 是任意的js表达式
  return <div style={{ border: "solid 4px" }}>{props.children}</div>;
} */

/* function WelcomeDialog() {
  return (
    <Dialog>
      <h1>test</h1>
      <p>hahah </p>
    </Dialog>
  );
} */

// const Api = {
//   getUser() {
//     return { name: "wss", age: 29 };
//   },
// };

// function Fetcher(props) {
//   const user = Api[props.name]();
//   //函数式children
//   //父组件调用必须是函数式的，这样children也就是函数式的
//   return props.children(user);
// }

//过滤器组件

// function Filtre({ children, type }) {
//   return (
//     <div>
//       {/* react提供Children进行遍历操作 */}
//       {React.Children.map(children, child => {
//         if (child.type !== type) {
//           return;
//         } else {
//           return child;
//         }
//       })}
//     </div>
//   );
// }

function RadioGroup(props) {
  return (
    <div>
      {React.Children.map(props.children, child => {
        //child是个虚拟dom，不可扩展 如果想要更改需要克隆一个出来
        // child.props.name = props.name;

        return React.cloneElement(child, { name: props.name });
      })}
    </div>
  );
}

function Radio({ children, ...rest }) {
  //Radio不是单标签，还有内容，可以用children当作solt
  return (
    <label>
      <input type="radio" {...rest} />
      {children}
    </label>
  );
}

export default function() {
  return (
    <div>
      {/* <WelcomeDialog /> */}

      {/* <Fetcher name="getUser">
        {({ name, age }) => (
          <p>
            {name} - {age}
          </p>
        )}
      </Fetcher> */}

      {/* 过滤出指定标签类型 */}
      {/* <Filtre type="p">
        <h1>React</h1>
        <p>react不错</p>
        <h1>vue</h1>
        <p>vue不错</p>
      </Filtre> */}

      {/* 统一增加name，不用一个个去增加name，繁琐 */}
      <RadioGroup name="mvvm">
        <Radio value="vue">vue</Radio>
        <Radio value="vue">React</Radio>
        <Radio value="vue">angular</Radio>
      </RadioGroup>
    </div>
  );
}
