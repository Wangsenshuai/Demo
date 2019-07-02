//使用中间件applyMiddleware
const initial = {
  isLogin: false,
  loading: false,
};

export const user = (state = initial, action) => {
  //返回的state 应该是一个新的变量，如果值为对象，应该返回新的对象，这个case是number所以不用
  switch (action.type) {
    case "requestLogin":
      return {
        isLogin: false,
        loading: true,
      };
    case "login":
      return {
        isLogin: true,
        loading: false,
      };
    default:
      return state;
  }
};

export const login = () => dispatch => {
  dispatch({ type: "requestLogin" });
  setTimeout(() => {
    dispatch({ type: "login" });
  }, 1500);
};
