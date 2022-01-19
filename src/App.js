import "./styles.css";

import React from "react";
import TankWorld from "./TankWorld";
import UIPane from "./UIPane";
import Tank from "./Tank";
import Terrain from "./Terrain";

class Controls {
  tanksData = [
    {
      key: 0,
      actions: 3,
      location: { x: 4, y: 4 },
      image: "🚘",
      hearts: 3,
      range: 1
    },
    {
      key: 0,
      actions: 3,
      location: { x: 4, y: 6 },
      image: "🚗",
      hearts: 3,
      range: 1
    }
  ];
  mytank = 0;

  constructor(app) {
    this.app = app;
    this.terrain = [];
    for (let y = 0; y < 12; y++) {
      this.terrain.push([]);
      for (let x = 0; x < 20; x++) {
        this.terrain[y][x] = new Terrain();
      }
    }
  }

  left() {
    let myTank = this.tanksData[this.mytank];
    if (myTank.actions) {
      myTank.location.x--;
      myTank.actions--;
      this.app.forceUpdate();
    }
  }

  right() {
    let myTank = this.tanksData[this.mytank];
    if (myTank.actions) {
      myTank.location.x++;
      myTank.actions--;
      this.app.forceUpdate();
    }
  }

  up() {
    let myTank = this.tanksData[this.mytank];
    if (myTank.actions) {
      myTank.location.y--;
      myTank.actions--;
      this.app.forceUpdate();
    }
  }

  down() {
    let myTank = this.tanksData[this.mytank];
    if (myTank.actions) {
      myTank.location.y++;
      myTank.actions--;
      this.app.forceUpdate();
    }
  }

  range() {
    let myTank = this.tanksData[this.mytank];

    if (myTank.actions) {
      myTank.range++;
      myTank.actions--;
      this.app.forceUpdate();
    }
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
    let tanks = this.state.controls.tanksData.map((tankData) => {
      return new Tank(tankData);
    });

    return (
      <div className="App">
        <h1 id="heading">Tank Turn Tactics</h1>
        <TankWorld tanks={tanks} terrain={this.state.controls.terrain} />
        <UIPane controls={this.state.controls} />
      </div>
    );
  }
}
