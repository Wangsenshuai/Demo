import React, { Component } from "react";

export default class CartSample extends Component {
  //状态初始化在构造器中
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      goods: [
        {
          id: 1,
          text: "vue",
        },
        {
          id: 2,
          text: "react",
        },
      ],
      cart: [],
    };
  }

  changeText = e => {
    this.setState({ text: e.target.value });
  };

  addGood = () => {
    this.setState(prevState => {
      //   prevState.goods.push({
      //     id: prevState.goods.length + 1,
      //     text: prevState.text,
      //   });
      //react期望返回新值
      return {
        goods: [
          ...prevState.goods,
          { id: prevState.goods.length + 1, text: prevState.text },
        ],
      };
    });
  };

  addCart = good => {
    const newCart = [...this.state.cart];
    const idx = newCart.findIndex(c => c.id === good.id);
    const item = newCart[idx];
    if (item) {
      newCart.splice(idx, 1, { ...item, count: item.count + 1 });
    } else {
      newCart.push({ ...good, count: 1 });
    }

    //更新数据和视图
    this.setState({ cart: newCart });
  };

  render() {
    return (
      <div>
        {this.props.title && <h1>this.props.title</h1>}

        <div>
          <input
            type="text"
            value={this.state.text}
            onChange={this.changeText}
          />
          <button onClick={this.addGood}>点击添加商品</button>
        </div>

        <ul>
          {this.state.goods.map(item => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => this.addCart(item)}>点击购买商品</button>
            </li>
          ))}
        </ul>

        {/* 购物车 */}
        <Cart data={this.state.cart} />
      </div>
    );
  }
}

function Cart(props) {
  return (
    <div>
      Cart
      <table>
        <tbody>
          {props.data.map(d => {
            return (
              <tr key={d.id}>
                <td>{d.text}</td>
                <td>{d.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
