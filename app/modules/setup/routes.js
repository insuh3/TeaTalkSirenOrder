import React from "react";
import { AppRegistry, Platform, StyleSheet, View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import { createMaterialTopTabNavigator, createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { DrawerActions } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { name as appName } from "../../../app.json";

import { reducer } from "../reducers/index";
import { readDecks } from "../storage/decks";
import { loadData } from "../actions/creators";

import Logo from "../components/Header/Logo";

import Splash from "../components/SplashScreen/Splash";
import Login from "../components/LoginScreen/Login";
import Home from "../components/SplashScreen/Splash";

import CoffeeScreen from "../components/CoffeeScreen";
import NewCardScreen from "../components/NewCardScreen";
import ReviewScreen from "../components/ReviewScreen";

import DrawerScreen from '../components/Common/DrawerScreen';

let store = createStore(reducer);
// let headerOptions = {
//   headerStyle: { backgroundColor: 'black' },
//   headerLeft: <Logo />
// };

// On application start, read saved state from disk.
readDecks().then(decks => {
  store.dispatch(loadData(decks));
});

// const makeRootNavigator = createStackNavigator ({
//       Init: { screen: Login},
//       Home: { screen: Login},
//       Menu: { screen: CoffeeScreen, navigationOptions: headerOptions },
//       Review: { screen: ReviewScreen, navigationOptions: headerOptions },
//       CardCreation: {
//           screen: NewCardScreen,
//           path: "createCard/:deckID",
//           navigationOptions: headerOptions
//           }
//     }
// );



const Tabs = createMaterialTopTabNavigator({
    Home: Home,
    Menu: CoffeeScreen,
    Review: ReviewScreen,
    CardCreation: {
          screen: NewCardScreen,
          path: "createCard/:deckID",
          //navigationOptions: headerOptions
        }
    },
    {
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#fff'
            },
            indicatorStyle: {
                backgroundColor: '#000'
            },
        }
    }
);

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Tabs
    }},
    {
        initialRouteName: 'Home',
        contentComponent: DrawerScreen,
        drawerWidth: 300
    }
);

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen) {
        return <Image source={require('../images/menu-button.png')}/>
    }
    else {
        return <Image source={require('../images/left-arrow.png')}/>
    }
}

const StackNavigator = createStackNavigator({
    Home:{
        screen: DrawerNavigator
    }
    },
    {
        navigationOptions: ({ navigation }) => ({
            title: 'ReactNavigation',
            headerLeft: 
            <TouchableOpacity onPress={() => {this.props.navigation.dispatch(DrawerActions.toggleDrawer())} }>
                <MenuImage navigation={navigation}/>
            </TouchableOpacity>,
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    )}
);

class RootStack extends React.Component {
  render() {
   const AppNavigator = createAppContainer(DrawerNavigator);
   return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default RootStack;