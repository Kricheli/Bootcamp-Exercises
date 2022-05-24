import React, { Component } from "react";
import data from "../data";
import { getNames } from "../utilitize";
import { ageFiltering } from "../utilitize";
import Name from "./Name";
import Card from './Card';

export default class messageData extends React.Component {
  state = { names: [], birthdays: [] };

  componentDidMount() {
    this.setState({ names: getNames() });
    this.setState({ birthdays: ageFiltering()});
  }

  render() {
    return (
      <div>
        <Name namesFunction={this.state.names}/>
        <Card cardFunction={this.state.birthdays}/>
      </div>
    )
  }
}
