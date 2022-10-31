import App from "./App";
import IGameLogic from "./IGameLogic";
import ITanksData from "./ITanksData";
import ITerrainData from "./ITerrainData";

const me = "giuseppe";

export default class TankBrains {
  app: App;
  gameLogic: IGameLogic;
  terrainData: ITerrainData[][];
  tanksData: ITanksData[] = [];
  mytank = 0;

  constructor(app: App, gamelogic: IGameLogic) {
    this.app = app;
    this.terrainData = [];
    this.gameLogic = gamelogic;
    gamelogic.subscribe(this, me);
  }

  initGame(terrainData: any) {
    this.terrainData = terrainData.state as ITerrainData[][];
    this.tanksData = terrainData.tanksData as ITanksData[];
    this.tanksData.forEach((tank) => {
      if (tank.who === me) {
        console.log("me");
        console.log(tank);
        this.mytank = this.tanksData.indexOf(tank);
      }
    });
    this.app.forceUpdate();
  }

  left() {
    let location = this.tanksData[this.mytank].location;
    location.x--;
    this.gameLogic.move(location);
    // let myTank = this.tanksData[this.mytank];
    // if (myTank.actions) {
    //   myTank.location.x--;
    //   myTank.actions--;
    //   this.app.forceUpdate();
    // }
  }

  right() {
    let location = this.tanksData[this.mytank].location;
    location.x++;
    this.gameLogic.move(location);
    //let myTank = this.tanksData[this.mytank];
    //if (myTank.actions) {
    //  myTank.location.x++;
    //  myTank.actions--;
    //  this.app.forceUpdate();
    //}
  }

  up() {
    let location = this.tanksData[this.mytank].location;
    location.y--;
    this.gameLogic.move(location);
    // let myTank = this.tanksData[this.mytank];
    // if (myTank.actions) {
    //   myTank.location.y--;
    //   myTank.actions--;
    //   this.app.forceUpdate();
    // }
  }

  down() {
    let location = this.tanksData[this.mytank].location;
    location.y++;
    this.gameLogic.move(location);
    // let myTank = this.tanksData[this.mytank];
    // if (myTank.actions) {
    //   myTank.location.y++;
    //   myTank.actions--;
    //   this.app.forceUpdate();
    // }
  }

  range() {
    let myTank = this.tanksData[this.mytank];

    if (myTank.actions) {
      myTank.range++;
      myTank.actions--;
      this.app.forceUpdate();
    }
  }

  fire() {}
}
