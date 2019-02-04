// /**
//  * @format
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

import React from 'react';
import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';

import { createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { reducer } from "./reducers/index";
import { readDecks } from "./storage/decks";
import { loadData } from "./actions/creators";

import Logo from "./components/Header/Logo";

import Login from './components/LoginScreen/Login';
import Splash from './components/SplashScreen/Splash';
import DeckScreen from "./components/DeckScreen";
import NewCardScreen from "./components/NewCardScreen";
import ReviewScreen from "./components/ReviewScreen";

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

const makeRootNavigator = createStackNavigator ({
  // const makeRootNavigator = createTabNavigator ({
      Home: { screen: Login},
      Menu: { screen: DeckScreen, navigationOptions: headerOptions },
      Review: { screen: ReviewScreen, navigationOptions: headerOptions },
      CardCreation: {
          screen: NewCardScreen,
          path: "createCard/:deckID",
          navigationOptions: headerOptions
          }
    }
);

class RootStack extends React.Component {
  render() {
   const AppNavigator = createAppContainer(makeRootNavigator);
   return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

type Props = {};
class Main extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'Splash'};
        setTimeout(() => {
            this.setState({currentScreen: 'RootStack'})
        }, 2500);
    }
    render() {
        const {currentScreen} = this.state
        let mainSrceen = currentScreen === 'Splash' ? <Splash /> : <RootStack />
        return mainSrceen
    }
}

AppRegistry.registerComponent(appName, () => Main);


// import React, { Component } from 'react';
// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';
// import TeaTalkSirenOrder from "./components/TeaTalkSirenOrder";

// AppRegistry.registerComponent(appName, () => TeaTalkSirenOrder);
// export default TeaTalkSirenOrder;