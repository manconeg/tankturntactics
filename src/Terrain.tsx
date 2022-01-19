import React from "react";
import ITile from "./ITile";

interface IProps {
  image: string;
}

interface IState {}

export default class Terrain extends React.Component<IProps, IState>
  implements ITile {
  render() {
    return this.props.image;
  }
}
