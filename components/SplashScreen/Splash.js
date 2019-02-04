import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';

import colors from "./../../styles/colors";

export default class Splash extends React.Component {
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
            <View style={styles.titleWrapper}>
                {/*<Image style={styles.logo} source={require('./../../images/coffee.png')}></Image> */}
                <Text style={styles.mainTitle}>TEATALK SIREN ORDER</Text>
                <Text style={styles.mainTitle}>구디의 가장 핫한 카페</Text>
                <Text></Text>
                <Image style={styles.logo} source={require('./../../images/coffee.png')}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleWrapper: {
        backgroundColor: colors.carrot,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        margin: '5%'
    },
    mainTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.white
    },
    subTitle: {
        fontSize: 18,
        color: colors.white
    }
})