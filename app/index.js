// // /**
// //  * @format
// //  * @lint-ignore-every XPLATJSCOPYRIGHT1
// //  */

// import React from "react";
// import { AppRegistry } from "react-native";
// import { createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// import { name as appName } from "./../app.json";

// import { reducer } from "./modules/reducers/index";
// import { readDecks } from "./modules/storage/decks";
// import { loadData } from "./modules/actions/creators";

// import Logo from "./modules/components/Header/Logo";

// import Splash from "./modules/components/SplashScreen/Splash";
// import Login from "./modules/components/LoginScreen/Login";
// import CoffeeScreen from "./modules/components/CoffeeScreen";
// import NewCardScreen from "./modules/components/NewCardScreen";
// import ReviewScreen from "./modules/components/ReviewScreen";

// let store = createStore(reducer);
// let headerOptions = {
//   headerStyle: { backgroundColor: 'black' },
//   headerLeft: <Logo />
// };

// // On application start, read saved state from disk.
// readDecks().then(decks => {
//   store.dispatch(loadData(decks));
// });

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

// class RootStack extends React.Component {
//   render() {
//    const AppNavigator = createAppContainer(makeRootNavigator);
//    return (
//       <Provider store={store}>
//         <AppNavigator />
//       </Provider>
//     );
//   }
// }

// type Props = {};
// class Main extends React.Component<Props> {
//     constructor(props) {
//         super(props);
//         this.state = {currentScreen: 'Splash'};
        
//         setTimeout(() => {
//             this.setState({currentScreen: 'RootStack'})
//         }, 2000);
//     }
//     render() {
//         const {currentScreen} = this.state
//         let mainSrceen = currentScreen === 'Splash' ? <Splash /> : <RootStack />
//         return mainSrceen
//     }
// }

// AppRegistry.registerComponent(appName, () => Main);


import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Splash from "./modules/components/SplashScreen/Splash";
import Login from "./modules/components/LoginScreen/Login";
import Home from "./modules/components/HomeScreen/index";
import RootStack from './modules/setup/routes';

type Props = {};
class App extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'Splash'};
        setTimeout(() => {
            this.setState({currentScreen: 'Login'})
        }, 2000);
    }
    render() {
        const {currentScreen} = this.state
        const AppNavigator = createAppContainer(makeRootNavigator);

        let mainSrceen = currentScreen === 'Splash' ? <Splash /> : <AppNavigator />
        return mainSrceen
    }
}

const makeRootNavigator = createStackNavigator ({
      Init: { screen: Login},
      Home: { screen: Home},
      Menu: { screen: RootStack}
    }
);

export default App;