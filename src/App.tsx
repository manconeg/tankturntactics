import "./styles.css";

import React from "react";
import TankWorld from "./TankWorld";
import UIPane from "./UIPane";
import Tank from "./Tank";
import Terrain from "./Terrain";
import TankBrains from "./TankBrains";
import RemoteGameLogic from "./RemoteGameLogic";

interface IProps {}

interface IState {
  controls: TankBrains;
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    let apiManager = new RemoteGameLogic();

    this.state = {
      controls: new TankBrains(this, apiManager)
    };
  }

  render() {
    let tanks: Tank[] = this.state.controls.tanksData.map((tankData) => {
      return new Tank(tankData);
    });

    let terrain: Terrain[][] = [];
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
