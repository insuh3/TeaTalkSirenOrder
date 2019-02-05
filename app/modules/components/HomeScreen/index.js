import React from "react";
import {StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Dimensions from "Dimensions";

import colors from "./../../styles/colors";
import styleIndex from "./../../styles/index";

let { height, width } = Dimensions.get("window");

const numColumns = 2;
const data = [{ key: '사이렌 오더' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }];
const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: 'blank-${numberOfElementsLastRow}', empty: true });
        numberOfElementsLastRow++;
    }
    return data;
};

export default class Home extends React.Component {
    constructor(props) {
        super(props)   
    }

    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.tileItem, styles.tileItemInvisible]} />;
        }
        return (
            <View style={styles.tileItem}>
                <Text style={styles.tileItemText}>{item.key}</Text>
            </View>
        );
    };


    render() {
        return (
            <View style={styles.Wrapper}>
                <View style={styles.topLeftWrapper}>
                    <Text style={styles.scrMessage}>안녕하세요.</Text>
                    <Text style={styles.nameTitle}>서준호 님</Text>
                    {/* <Image style={styles.logo} source={require('./../../images/coffeeGroup.png')}></Image> */}
                </View>
                <View style={styles.bottomWrapper}>
                    <FlatList
                        data={formatData(data, numColumns)}
                        style={styles.tileWrapper}
                        renderItem={this.renderItem}
                        numColumns={numColumns}/>
                </View>
                {/* <Image style={styles.logo} source={require('./../../images/coffee.png')}></Image> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Wrapper: {
        backgroundColor: colors.carrot,
        flex: 1,
    },
    topLeftWrapper: {
        flex: 0.2,
        margin: '10%',
    },
    middleWrapper: {
        flex: 0.5,
        margin: '10%',
    },
    bottomWrapper: {
        backgroundColor: colors.carrot,
        flex: 1.5,
    },
    scrMessage: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.white
    },
    nameTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.white
    },
    // appMessage: {
    //     fontWeight: 'bold',
    //     fontSize: 25,
    //     color: colors.white
    // },
    tileWrapper: {
        flex: 1,
        padding: '5%',
    },
    tileItem: {
        backgroundColor: colors.white,
        flex: 1,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center',
        height: (width / numColumns) * 0.5,
    },
    tileItemInvisible: {
        backgroundColor: 'transparent',
    },
    tileItemText: {
        color: colors.gray,
    }
})