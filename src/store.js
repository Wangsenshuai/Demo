//使用中间件applyMiddleware
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

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
//logger,thunk是有前后关系的
const store = createStore(counterReducer, applyMiddleware(logger, thunk));

//如果引用多个reducer  则第一个参数为对象{counter:counterReducer},组件取值为 state.counter多加一层
// const store = createStore(counterReducer, applyMiddleware(logger, thunk));

export default store;
