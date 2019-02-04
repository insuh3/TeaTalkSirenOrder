import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { reducer } from "../reducers/index";
import { readDecks } from "../storage/decks";
import { loadData } from "../actions/creators";

import Logo from "./Header/Logo";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";

let store = createStore(reducer);
let headerOptions = {
  headerStyle: { backgroundColor: 'black' },
  headerLeft: <Logo />
};

// On application start, read saved state from disk.
readDecks().then(decks => {
  store.dispatch(loadData(decks));
});

//Navigator를 이용하면, props를 함께 전달받음.

const makeRootNavigator = createMaterialTopTabNavigator ({
  // const makeRootNavigator = createTabNavigator ({
  Home: { screen: DeckScreen, navigationOptions: headerOptions },
  Review: { screen: ReviewScreen, navigationOptions: headerOptions },
  CardCreation: {
    screen: NewCardScreen,
    path: "createCard/:deckID",
    navigationOptions: headerOptions
  }
});

class App extends Component {
  render() {
   const Navigator = createAppContainer(makeRootNavigator);
   return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;