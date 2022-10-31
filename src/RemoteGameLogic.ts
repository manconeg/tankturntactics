import IGameLogic from "./IGameLogic";
import TankBrains from "./TankBrains";

const url = "wss://l2acymc1zh.execute-api.us-west-2.amazonaws.com/development";

export default class RemoteGameLogic implements IGameLogic {
  socket: WebSocket;
  client: TankBrains;
  me: string;
  lobbyId: string;

  handleConnect(event) {
    console.log("Connected", event);
    this.socket.send(
      JSON.stringify({
        action: "loadLobby",
        request: {
          lobbyId: this.lobbyId
        }
      })
    );
  }

  move(location) {
    console.log("Moving to %d", location);
    this.socket.send(
      JSON.stringify({
        action: "move",
        request: {
          lobbyId: this.lobbyId,
          location: location
        }
      })
    );
  }

  handleError(event) {
    console.log("Error", event);
  }

  handleMessage(event) {
    let eventData = JSON.parse(event.data);
    console.log("Message recieved", eventData.action);
    switch (eventData.action) {
      case "loadLobby":
        this.client.initGame(eventData.lobby);
        break;
      case "move":
        this.client.initGame(eventData.lobby);
        break;
      case "update":
        this.client.initGame(eventData.lobby);
        break;
      default:
        console.log("Message", eventData);
        break;
    }
  }

  subscribe(tankBrains: TankBrains, me: string) {
    this.client = tankBrains;
    this.me = me;
    this.lobbyId = "1";

    this.socket = new WebSocket(url + "?authorization=" + me);
    this.socket.addEventListener("open", (event) => this.handleConnect(event));
    this.socket.addEventListener("message", (event) =>
      this.handleMessage(event)
    );
    this.socket.addEventListener("error", (event) => this.handleError(event));
  }
}
