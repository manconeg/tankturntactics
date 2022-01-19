import React from "react";
import TankBrains from "./TankBrains";

interface IProps {
  controls: TankBrains;
}

interface IState {}

export default class UIPane extends React.Component<IProps, IState> {
  render() {
    let myTank = this.props.controls.tanksData[this.props.controls.mytank];
    return (
      <div id="ui">
        <div>
          <h1>Stats</h1>
          <ul>
            <li>Actions: {myTank.actions}</li>
            <li>Hit Points: {myTank.hearts}</li>
            <li>Range: {myTank.range}</li>
          </ul>
        </div>
        <div>
          <h1>Actions</h1>
          <button onClick={() => this.props.controls.left()}>L</button>
          <button onClick={() => this.props.controls.right()}>R</button>
          <button onClick={() => this.props.controls.up()}>U</button>
          <button onClick={() => this.props.controls.down()}>D</button>
          <button onClick={() => this.props.controls.range()}>Range</button>
          <button onClick={() => this.props.controls.fire()}>Fire</button>
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
