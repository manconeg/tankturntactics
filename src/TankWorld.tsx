import React from "react";
import ITile from "./ITile";
import Tank from "./Tank";
import Terrain from "./Terrain";

interface IProps {
  terrain: Terrain[][];
  tanks: Tank[];
}

interface IState {
  showRange: Tank;
}

export default class TankWorld extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showRange: null
    };
  }

  showRange(tank: ITile) {
    if (tank instanceof Tank) {
      this.setState({
        showRange: tank
      });
    }
  }

  hideRange(tank: ITile) {
    if (this.state.showRange === tank) {
      this.setState({
        showRange: null
      });
    }
  }

  getContent(x, y) {
    let style = {};
    if (this.state.showRange) {
      if (
        Math.abs(this.state.showRange.props.location.x - x) <=
          this.state.showRange.props.range &&
        Math.abs(this.state.showRange.props.location.y - y) <=
          this.state.showRange.props.range &&
        !(
          this.state.showRange.props.location.x === x &&
          this.state.showRange.props.location.y === y
        )
      ) {
        style = {
          backgroundColor: "red"
        };
      }
    }

    let contents: ITile = this.props.terrain[y][x];

    this.props.tanks.forEach((tank: Tank) => {
      if (tank.props.location.x === x && tank.props.location.y === y) {
        contents = tank;
      }
    });
    return (
      <div
        style={style}
        onMouseEnter={() => this.showRange(contents)}
        onMouseLeave={() => this.hideRange(contents)}
      >
        {contents.render()}
      </div>
    );
  }

  render() {
    let tableContents = [];

    for (let y = 0; y < this.props.terrain.length; y++) {
      let cellContents = [];
      for (let x = 0; x < this.props.terrain[y].length; x++) {
        cellContents.push(<td key={x}>{this.getContent(x, y)}</td>);
      }
      tableContents.push(<tr key={y}>{cellContents}</tr>);
    }
    return (
      <table id="tank-world">
        <tbody>{tableContents}</tbody>
      </table>
    );
  }
}
