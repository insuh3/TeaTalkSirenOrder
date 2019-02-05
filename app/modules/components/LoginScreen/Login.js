import React from "react";
import {
    Alert,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    StatusBar,
    TextInput,
    SafeAreaView,
    Keyboard,
    KeyboardAvoidingView } from 'react-native';

import RootStack from '../../../modules/setup/routes';

import Dimensions from "Dimensions";
import colors from "./../../styles/colors";

let { height, width } = Dimensions.get("window");

export default class Login extends React.Component {
    static navigationOptions = {
        header: null,
    };
    
    _loginPass = () => {
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <StatusBar barStyle="light-content"></StatusBar>
                    <View style={styles.topWrapper}>
                        <View style={styles.title}>
                            <Text style={styles.title}>TEATALK</Text>
                            <Text style={styles.title}>SIREN ORDER</Text>
                            <Text style={styles.description}>똑똑한 커피문화 만들기</Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.bottomWrapper}>
                            <KeyboardAvoidingView>
                                <View style={styles.infoWrapper}>
                                    <TextInput style={styles.textInput}
                                        placeholder='사번을 입력하세요.'
                                        //placeholderTextColor='rgba(255,255,255,0.8)'
                                        marginTop="10%"
                                        paddingRight={12}
                                        paddingLeft={12}
                                        returnKeyType='next'
                                        onSubmitEditing={()=> this.refs.textName.focus()}/>
                                    <TextInput style={styles.textInput}
                                        placeholder='이름을 입력하세요.'
                                        //placeholderTextColor='rgba(255,255,255,0.8)'
                                        marginTop="5%"
                                        paddingRight={12}
                                        paddingLeft={12}
                                        returnKeyType='go'
                                        ref={'textName'}
                                    />
                                    <TouchableOpacity onPress={this._loginPass}>
                                        <Text style={styles.button}>인 증 하 기</Text>
                                    </TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        </View>        
                    </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.carrot,
        flexDirection: 'column'
    },
    topWrapper: {
        flex: 0.5,
        justifyContent: 'center'
    },
    bottomWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    infoWrapper: {
        backgroundColor: colors.white,
        width: width * 0.9,
        height: height * 0.45,
        alignItems: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15
    },
    title: {
        marginLeft: '5%',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    description: {
        marginTop: 15,
        marginLeft: '5%',

        color: 'white',
        fontSize: 18,
        textAlign: 'left',
    },
    textInput: {
        width: width * 0.8,
        color: colors.gray,
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: 'rgba(236,240,241, 1)',
    },
    shadowStyle: {

    },
    button: {
        alignSelf: 'flex-end',
        marginTop: "5%",

        width: width * 0.8,
        height: height * 0.08,

        color: '#FFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: colors.carrot,
        borderColor: '#FFF',
    }
});