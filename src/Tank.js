import React from "react";

export default class Tank extends React.Component {
  render() {
    let hearts = "";
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
