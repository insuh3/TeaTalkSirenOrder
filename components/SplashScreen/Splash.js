import React, {Component} from "react";
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {timer: 0}
        // setInterval(() => {
        //     this.setState({timer: this.state.timer + 1})
        //     //console.Log(timer)
        // }, 1000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('./../../images/coffee.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    }
})