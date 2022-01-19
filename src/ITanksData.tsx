import ILocation from "./ILocation";

export default interface TanksData {
  key: number;
  actions: number;
  location: ILocation;
  image: String;
  hearts: number;
  range: number;
}
