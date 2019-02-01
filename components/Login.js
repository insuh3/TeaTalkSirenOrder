import React, {Component} from "react";
import {
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
    KeyboardAvoidingView} from 'react-native';
import InlineImage from './InlineImage';

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo} source={require('../images/coffee.png')}></Image>
                            <View style={styles.title}>
                                <Text style={styles.title}>TEATALK</Text>
                                <Text style={styles.title}>SIRENORDER</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    placeholder='사번을 입력하세요.'
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='next'
                                    onSubmitEditing={()=> this.refs.txtName.focus()}
                                />
                                <TextInput style={styles.input}
                                    placeholder='이름을 입력하세요.'
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    ref={'txtName'}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column'
    },
    logoContainer: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center' 
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 20,
        opacity: 0.9
    },
    logo: {
        marginLeft: 25
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        //backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    }
});