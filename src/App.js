import "./styles.css";

import React from "react";
import TankWorld from "./TankWorld";
import UIPane from "./UIPane";
import Tank from "./Tank";
import Terrain from "./Terrain";

let tanksData = [
  { location: { x: 4, y: 4 }, image: "🚘", hearts: 3, range: 1 },
  { location: { x: 4, y: 6 }, image: "🚗", hearts: 3, range: 1 }
];

class Controls {
  constructor(app) {
    this.app = app;
    this.terrain = [];
    for (let y = 0; y < 12; y++) {
      this.terrain.push([]);
      for (let x = 0; x < 20; x++) {
        this.terrain[y][x] = new Terrain();
      }
    }

    this.tanks = tanksData.map((tankData) => {
      return new Tank(tankData);
    });
  }

  left() {
    this.tanks[0].props.location.x--;
    this.app.forceUpdate();
  }

  right() {
    this.tanks[0].props.location.x++;
    this.app.forceUpdate();
  }

  up() {
    this.tanks[0].props.location.y--;
    this.app.forceUpdate();
  }

  down() {
    this.tanks[0].props.location.y++;
    this.app.forceUpdate();
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      controls: new Controls(this)
    };
  }

  render() {
    return (
      <div className="App">
        <h1 id="heading">Tank Turn Tactics</h1>
        <TankWorld
          tanks={this.state.controls.tanks}
          terrain={this.state.controls.terrain}
        />
        <UIPane controls={this.state.controls} />
      </div>
    );
  }
}
