import ILocation from "./ILocation";

export default interface TanksData {
  key: number;
  actions: number;
  location: ILocation;
  image: string;
  hearts: number;
  range: number;
  who: string;
}
