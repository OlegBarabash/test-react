import React, { Component } from "react";

export class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <button onClick={this.show}>Show</button>
        <button onClick={this.hide}>Hide</button>
        {isOpen && children}
      </>
    );
  }
}

export class Lesson extends Component {
  handleIncrement = (evt) => {
    console.log("Increment button was clicked!", evt); // працює
    console.log("this.props: ", this.props); // працює
  };

  handleDecrement = (evt) => {
    console.log("Decrement button was clicked!", evt); // працює
    console.log("this.props: ", this.props); // працює
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
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
