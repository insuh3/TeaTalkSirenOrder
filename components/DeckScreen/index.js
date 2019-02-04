import React from "react";
import { StyleSheet, View } from "react-native";

import { connect } from "react-redux";

import { MockDecks } from "./../../data/Mocks";
import { addDeck, reviewDeck } from "./../../actions/creators";

import Coffee from "./Coffee";
import CoffeeCreation from "./CoffeeCreation";

import colors from "./../../styles/colors";

class DecksScreen extends React.Component {
  static displayName = "DecksScreen";
  static navigationOptions = { title: "COFFEE" };

  _createDeck = name => {
    let createDeckAction = addDeck(name);
    this.props.createDeck(createDeckAction);
    this.props.navigation.navigate("CardCreation", {
      deckID: createDeckAction.data.id
    });
  };

  _addCards = deckID => {
    this.props.navigation.navigate("CardCreation", { deckID: deckID });
  };

  _review = deckID => {
    this.props.reviewDeck(deckID);
    this.props.navigation.navigate("Review");
  };

  _mkDeckViews() {
    if (!this.props.decks) {
      return null;
    }

    return this.props.decks.map(deck => {
      return (
        <Coffee
          deck={deck}
          count={this.props.counts[deck.id]}
          key={deck.id}
          add={() => {
            this._addCards(deck.id);
          }}
          review={() => {
            this._review(deck.id);
          }}
        />
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this._mkDeckViews()}
        <CoffeeCreation create={this._createDeck} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, flex: 1, paddingTop: 24 }
});

const mapDispatchToProps = dispatch => {
  return {
    createDeck: deckAction => {
      dispatch(deckAction);
    },
    reviewDeck: deckID => {
      dispatch(reviewDeck(deckID));
    }
  };
};

const mapStateToProps = state => {
  return {
    decks: state.decks,
    counts: state.decks.reduce(
      (sum, deck) => {
        sum[deck.id] = deck.cards.length;
        return sum;
      },
      {}
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen);