/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import Login from './components/Login';
import Splash from './components/Splash';
import {name as appName} from './app.json';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'Splash'};
        setTimeout(() => {
            this.setState({currentScreen: 'Login'})
        }, 3000);
    }
    render() {
        const {currentScreen} = this.state
        let mainSrceen = currentScreen === 'Splash' ? <Splash /> : <Login />
        return mainSrceen
    }
}

AppRegistry.registerComponent(appName, () => Main);
