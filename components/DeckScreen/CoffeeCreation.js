import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { CreateCoffeeButton, EnterDeck } from "./CoffeeCreationFields";

class CoffeeCreation extends Component {
  constructor(props) {
    super(props);
    this.state = { showingNameField: false };
  }

  _newCoffee = name => {
    this.setState({ showingNameField: false });
    this.props.create(name);
  };

  _showField = () => {
    this.setState({ showingNameField: true });
  };

  render() {
    let contents = this.state.showingNameField
      ? <EnterDeck create={this._newCoffee} />
      : <CreateCoffeeButton onPress={this._showField} />;
    return contents;
  }
}

export default CoffeeCreation;
