import React from "react";

export default class UIPane extends React.Component {
  render() {
    return (
      <div id="ui">
        <div>
          <h1>Stats</h1>
          <ul>
            <li>Actions: </li>
            <li>Hit Points: </li>
            <li>Range: </li>
          </ul>
        </div>
        <div>
          <h1>Actions</h1>
          <button onClick={() => this.props.controls.left()}>L</button>
          <button onClick={() => this.props.controls.right()}>R</button>
          <button onClick={() => this.props.controls.up()}>U</button>
          <button onClick={() => this.props.controls.down()}>D</button>
          <button>Range</button>
          <button>Fire</button>
        </div>
        <div>
          <h1>Free Actions</h1>
          <button>Share Action</button>
          <button>Share HP</button>
        </div>
      </div>
    );
  }
}
