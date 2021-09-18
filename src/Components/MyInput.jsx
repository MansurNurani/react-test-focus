import React, { Component } from "react";
import "./MyInput.css";
export default class MyInput extends Component {
  state = { showBottomBox: false };
  handleFocus = () => {
    console.log("focus in");
    this.setState({ showBottomBox: true });
  };
  handleBlur = () => {
    console.log("blur");
    this.setState({ showBottomBox: false });
  };
  render() {
    return (
      <div id="MainDiv">
        <div id="InputDiv">
          <input id="MainInput" onFocus={this.handleFocus} onBlur={this.handleBlur} type="text" />
        </div>
        {this.state.showBottomBox && <div id="BottomBox">Content111</div>}
      </div>
    );
  }
}
