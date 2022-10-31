import TankBrains from "./TankBrains";
import ILocation from "./ILocation";

export default interface IGameLogic {
  subscribe(tankBrains: TankBrains, me: string): void;
  move(location: ILocation): void;
}
