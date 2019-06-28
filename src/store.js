import { createStore } from "redux";

const counterReducer = (state = 1, action) => {
  //返回的state 应该是一个新的变量，如果值为对象，应该返回新的对象，这个case是number所以不用
  switch (action.type) {
    case "add":
      return state + 1;
    case "minus":
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
