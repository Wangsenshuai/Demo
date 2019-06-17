import React, { useState, useEffect } from "react";

//自定义钩子是一个函数，名称用use开头，react会进行解析辨认，函数内部可以调用其他钩子

function useAge() {
  const [age, setAge] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAge(20);
    }, 2000);
  });
  return age;
}

export default function HookTest(props) {
  //useState声明初始值，通过解构得到clss中state使用方式
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("apple");

  //副作用钩子，会在每次渲染时（后）执行
  //第二个参数为依赖值，可以设置多个，当依赖不变时，钩子不会触发,但是多个依赖只要有一个发生变化就会触发
  useEffect(() => {
    document.title = `你点击饿了${count}次`;
  }, [count, fruit]);

  //如果副作用钩子仅打算执行一次，传递第二个参数为[]
  useEffect(() => {
    console.log("api调用");
  }, []);

  //多个状态
  //   const [age] = useState(20);
  const age = useAge(); //自定义钩子
  const [input, setInput] = useState("");
  const [fruits, setFruits] = useState(["apple", "banana"]);

  return (
    <div>
      hook
      <p>点击了{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击+1
      </button>
      <p>年龄{age ? age : "loading"}</p>
      <p>选择的水果{fruit}</p>
      <p>
        <input
          type="text"
          placeholder="输入水果"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setFruits([...fruits, input]);
          }}
        >
          点击新增水果
        </button>
      </p>
      <ul>
        {fruits.map((e, index) => (
          <li
            key={e + index}
            onClick={() => {
              setFruit(e);
            }}
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}
