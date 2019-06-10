import React from "react";

export default class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.setIntervalID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.setIntervalID);
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}
