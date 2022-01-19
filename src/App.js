import "./styles.css";

import React from "react";
import TankWorld from "./TankWorld";
import UIPane from "./UIPane";
import Tank from "./Tank";
import Terrain from "./Terrain";
import TankBrains from "./TankBrains";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      controls: new TankBrains(this)
    };
  }

  render() {
    let tanks = this.state.controls.tanksData.map((tankData) => {
      return new Tank(tankData);
    });

    let terrain = [];
    for (let y in this.state.controls.terrainData) {
      terrain.push([]);
      for (let x in this.state.controls.terrainData[y]) {
        terrain[y].push(new Terrain(this.state.controls.terrainData[y][x]));
      }
    }

    return (
      <div className="App">
        <h1 id="heading">Tank Turn Tactics</h1>
        <TankWorld tanks={tanks} terrain={terrain} />
        <UIPane controls={this.state.controls} />
      </div>
    );
  }
}
