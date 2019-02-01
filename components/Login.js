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
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            { /*<Image style={styles.logo} source={require('../images/coffee.png')}></Image> */ }
                            <View style={styles.title}>
                                <Text style={styles.title}>TEATALK</Text>
                                <Text style={styles.title}>SIRENORDER</Text>
                                <Text style={styles.description}>똑똑한 커피문화 만들기</Text>
                            </View>
                            <KeyboardAvoidingView style={styles.infoContainer}>
                                <View>
                                    <TextInput style={styles.textInput}
                                        placeholder='사번을 입력하세요.'
                                        placeholderTextColor='rgba(255,255,255,0.8)'
                                        marginTop="10%"
                                        paddingRight={12}
                                        paddingLeft={12}
                                        returnKeyType='next'
                                        onSubmitEditing={()=> this.refs.textName.focus()}
                                    />
                                    <TextInput style={styles.textInput}
                                        placeholder='이름을 입력하세요.'
                                        placeholderTextColor='rgba(255,255,255,0.8)'
                                        marginTop="5%"
                                        paddingRight={12}
                                        paddingLeft={12}
                                        returnKeyType='go'
                                        ref={'textName'}
                                    />
                                    <TouchableOpacity onPress={this._onPressButton}>
                                <Text style={styles.button}>로그인</Text>
                            </TouchableOpacity>
                                </View>
                                
                            </KeyboardAvoidingView>
                        </View>
                    </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    }
}

{
    /*
    const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress = {()=> Keyboard.dismiss()>
        {children}
    </TouchableWithoutFeedback>
    });
    */
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'column'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    infoContainer: {
        justifyContent: 'center',
        margin: "5%",
        padding: "5%",

        width: "90%",
        height: "40%",

        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10
    },
    title: {
        marginLeft: "5%",
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        opacity: 0.9
    },
    description: {
        marginTop: 15,
        marginLeft: "5%",

        color: 'white',
        fontSize: 15,
        textAlign: 'left',
    },
    logo: {
        marginLeft: 25
    },
    textInput: {
        width:"100%",
        //height: "30%",
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10
    },

    button: {
        alignSelf: 'flex-end',
        marginTop: "5%",
        //padding: "5%",

        width:"50%",
        height: "40%",

        color: '#FFF',
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: 'rgba(211,84,0,0.8)',
        //backgroundColor: 'rgba(#d35400, 0.2)',
        borderColor: "#FFF",
        borderRadius: 10
    }
});