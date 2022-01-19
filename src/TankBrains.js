export default class TankBrains {
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
    this.terrainData = [];
    for (let y = 0; y < 12; y++) {
      this.terrainData.push([]);
      for (let x = 0; x < 20; x++) {
        this.terrainData[y][x] = { image: "🌳" };
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
