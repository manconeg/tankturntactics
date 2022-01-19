import React from "react";
import ITanksData from "./ITanksData";
import ITile from "./ITile";

interface IState {}

export default class Tank extends React.Component<ITanksData, IState>
  implements ITile {
  render() {
    let hearts: string = "";
    for (let heart = 0; heart < this.props.hearts; heart++) {
      hearts += "❤️";
    }

    return (
      <div className="tank">
        <div id="image">{this.props.image}</div>
        <div id="stats">
          <div>{hearts}</div>
          <div>R: {this.props.range}</div>
        </div>
      </div>
    );
  }
}
