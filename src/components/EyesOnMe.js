import React, { Component } from "react";

export default class EyesOnMe extends Component {
  handleBlurOutput = () => {
    console.log("Hey! Eyes on me!");
  };
  handleFocusOutput = () => {
    console.log("Good!");
  };
  render() {
    return (
      <button onFocus={this.handleFocusOutput} onBlur={this.handleBlurOutput} />
    );
  }
}
