// /**
//  * @format
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

// import React, { Component } from 'react';
// import {AppRegistry} from 'react-native';
// import App from './App';

// import Login from './components/LoginScreen/Login';
// // import Deck from './components/DeckScreen/index';
// import Splash from './components/SplashScreen/Splash';

// import {name as appName} from './app.json';

// class Main extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {currentScreen: 'Splash'};
//         setTimeout(() => {
//             this.setState({currentScreen: 'Login'})
//         }, 3000);
//     }
//     render() {
//         const {currentScreen} = this.state
//         let mainSrceen = currentScreen === 'Splash' ? <Splash /> : <Login />
//         return mainSrceen
//     }
// }

// AppRegistry.registerComponent(appName, () => Main);
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import TeaTalkSirenOrder from "./components/TeaTalkSirenOrder";

AppRegistry.registerComponent(appName, () => TeaTalkSirenOrder);
// export default TeaTalkSirenOrder;