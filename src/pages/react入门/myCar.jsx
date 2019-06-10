import React, { Component } from "react";
import { Input, Button } from "antd";

//实现点击添加
//实现总价

export default class MyCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      goodName: "",
      goodPrice: "",
      totalNum: 0,
      totalPrice: 0,
      goods: [
        { id: 1, name: "vue", count: 1, price: 10 },
        { id: 2, name: "react", count: 1, price: 20 },
      ],
    };
  }

  //input绑定数据
  changeGoodName = e => {
    this.setState({ goodName: e.target.value });
  };

  changeGoodPrice = e => {
    this.setState({ goodPrice: e.target.value });
  };

  //添加new商品
  addGood = e => {
    const newCart = [...this.state.goods];
    const idx = newCart.findIndex(c => c.name === this.state.goodName);
    const item = newCart[idx];
    if (item) {
      newCart.splice(idx, 1, {
        ...item,
        count: item.count + 1,
        price: this.state.goodPrice,
      });
      this.setState({ goods: newCart }, () => {
        this.calc();
      });
    } else {
      this.setState(
        prevState => {
          let newGoodId = prevState.goods.length + 1;
          return {
            goods: [
              ...prevState.goods,
              {
                id: newGoodId,
                name: prevState.goodName,
                count: 1,
                price: prevState.goodPrice,
              },
            ],
          };
        },
        () => {
          this.calc();
        }
      );
    }
  };

  //单个商品加减
  add = good => {
    const newCart = [...this.state.goods];
    const idx = newCart.findIndex(c => c.id === good.id);
    newCart.splice(idx, 1, { ...good, count: good.count + 1 });

    this.setState({ goods: [...newCart] }, () => {
      this.calc();
    });
  };

  minus = good => {
    const newCart = [...this.state.goods];
    const idx = newCart.findIndex(c => c.id === good.id);

    if (good.count - 1 >= 0) {
      newCart.splice(idx, 1, { ...good, count: good.count - 1 });
    } else {
      newCart.splice(idx, 1);
    }
    this.setState({ goods: [...newCart] }, () => {
      this.calc();
    });
  };

  calc = () => {
    let totalNum = 0;
    let totalPrice = 0;
    this.state.goods.forEach(good => {
      totalNum += good.count;
      totalPrice += good.count * good.price;
    });
    this.setState({ totalNum: totalNum, totalPrice: totalPrice });
  };

  componentDidMount() {
    this.calc();
  }

  render() {
    return (
      <div>
        {this.state.title && <h1>{this.state.title}</h1>}
        <div>
          商品名称：
          <Input
            allowClear={true}
            name="goodName"
            value={this.state.goodName}
            onChange={this.changeGoodName}
          />
          商品价格：
          <Input
            allowClear={true}
            name="goodPrice"
            value={this.state.goodPrice}
            onChange={this.changeGoodPrice}
          />
          <Button type="primary" onClick={this.addGood}>
            点击添加
          </Button>
        </div>
        <p>总计：{this.state.totalPrice}</p>
        <CarList data={this.state.goods} add={this.add} minus={this.minus} />
      </div>
    );
  }
}

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  render() {
    return (
      <ul>
        {this.props.data.map(good => {
          return (
            <li key={good.id}>
              <p>商品名称:{good.name}</p>
              <p>
                商品数量:
                <Button onClick={() => this.state.minus(good)}>-</Button>
                <span>{good.count}</span>
                <Button onClick={() => this.state.add(good)}>+</Button>
              </p>
              <p>商品单价:{good.price}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
