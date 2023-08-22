import React, { Component } from "react";

export class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div>
        <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
        {isOpen && children}
      </div>
    );
  }
}

export class Counter extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
//=======================================================================
// Button отримує функцію changeMessage (ім'я пропа),
// яка викликається під час події onClick
const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

export class LocaleTime extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод, який будемо передавати в Button для виклику під час кліку
  updateMessage = (evt) => {
    console.log(evt); // Доступний об'єкт події
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}
