import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import DeckModel from "./../../models/Coffee";
import Button from "./../Button";
import NormalText from "./../NormalText";
import colors from "./../../styles/colors";

class Coffee extends Component {
  static displayName = "Coffee";

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  _incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  // _review = () => {
  //   this.props.review();
  // };

  _addCards = () => {
    this.props.add();
  };

  render() {
    return (
      <View style={styles.deckGroup}>
        <Button style={styles.deckButton} onPress={ () => this._incrementCount() }>
          <NormalText>
            {this.props.deck.name}: {this.state.count} 잔
          </NormalText>
        </Button>

        <Button style={styles.editButton} onPress={this._addCards}>
          <NormalText>-</NormalText>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckGroup: {
    flexDirection: "row",
    //alignItems: "stretch",
    padding: 10,
    marginBottom: 5
    
  },
  deckButton: { backgroundColor: colors.pink, padding: 10, margin: 0, flex: 1 },
  editButton: {
    width: 60,
    backgroundColor: colors.pink2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 0,
    flex: 0
  }
});


export default Coffee;