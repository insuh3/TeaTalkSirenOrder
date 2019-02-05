import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import DeckModel from "./../../models/Coffee";
import { addCard } from "./../../actions/creators";
import { connect } from "react-redux";

import Button from "../Button";
import LabeledInput from "../LabeledInput";
import NormalText from "../NormalText";
import colors from "./../../styles/colors";

class NewCard extends Component {
  static navigationOptions = { title: "음료 추가" };
  //static initialState = { front: "", back: "" };
  
  constructor(props) {
    super(props);
    //this.state = this.initialState;
    this.state = {count: 0};
  }

  _decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  }

  _incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  

  _deckID = () => {
    return this.props.navigation.state.params.deckID;
  };

  _handleFront = text => {
    this.setState({ front: text });
  };

  _handleBack = text => {
    this.setState({ back: text });
  };

  _createCard = () => {
    this.props.createCard(this.state.front, this.state.back, this._deckID());
    this.props.navigation.navigate("CardCreation", { deckID: this._deckID() });
  };

  _reviewDeck = () => {
    this.props.navigation.navigate("Review");
  };

  _doneCreating = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <LabeledInput
          label="Cafe Americano"
          clearOnSubmit={false}
          onEntry={this._handleFront}
          onChange={this._handleFront}
        />
        {/* <LabeledInput
          label="Back"
          clearOnSubmit={false}
          onEntry={this._handleBack}
          onChange={this._handleBack}
        /> */}
        

        <View style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end'}}>
          <NormalText style={{marginTop: 20, marginRight: 15}}>
            {this.state.count} 잔
          </NormalText>
          <Button style={styles.minusButton} onPress={ () => this._decrementCount() }>
            <Image source={require('./../../images/minus.png')}></Image>
          </Button>
          
          <Button style={styles.plusButton} onPress={ () => this._incrementCount() }>
            <Image source={require('./../../images/plus.png')}></Image>
          </Button>
        </View>

        <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
          <Button style={styles.hotButton} onPress={this._createCard}>
            <NormalText>HOT</NormalText>
          </Button>

          <Button style={styles.icedButton} onPress={this._createCard}>
            <NormalText>ICED</NormalText>
          </Button>
        </View>
        
        <NormalText style={{marginTop: 15, marginLeft: 25}}>컵선택</NormalText>

        <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
          
          
          <Button style={styles.generalButton} onPress={this._createCard}>
            <NormalText>개인컵</NormalText>
          </Button>
          <Button style={styles.generalButton} onPress={this._createCard}>
            <NormalText>일회용컵</NormalText>
          </Button>
        </View>

        <View style={styles.buttonRow}>
          

          <Button style={styles.createButton} onPress={this._createCard}>
            <NormalText>바로 주문하기</NormalText>

          </Button>

          <Button style={styles.createButton} onPress={this._createCard}>
            <NormalText>담기</NormalText>
          </Button>

          {/* <Button style={styles.secondaryButton} onPress={this._doneCreating}>
            <NormalText>Done</NormalText>
          </Button>

          <Button style={styles.secondaryButton} onPress={this._reviewDeck}>
            <NormalText>Review Coffee</NormalText>
          </Button> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  beverageWrapper: {
    flex: 1,
    margin: 10
  },
  hotButton: {
    backgroundColor: 'transparent',
    width: '40%',
    height: '60%',
    borderWidth: 1.5,
    borderColor: colors.black
  },
  icedButton: {
    backgroundColor: 'transparent',
    width: '40%',
    height: '60%',
    borderWidth: 1.5,
    borderColor: colors.black
  },
  generalButton: {
    backgroundColor: 'transparent',
    width: '40%',
    height: '60%',
    borderWidth: 1.5,
    borderColor: colors.black
  },
  createButton: {
    backgroundColor: colors.honeyglow
  },
  secondaryButton: {
    backgroundColor: colors.blue
  },
  minusButton: {
    backgroundColor:'transparent',
    height: 50
    // flexDirection: 'column'
  },
  plusButton: {
    backgroundColor:'transparent',
    height: 50
    // alignSelf: 'flex-end'
    //flexDirection: 'column'
  },
  buttonRow: {
    flex: 5,
    flexDirection: 'column'
  }
});

const mapStateToProps = state => {
  return { decks: state.decks };
};

const mapDispatchToProps = dispatch => {
  return {
    createCard: (front, back, deckID) => {
      dispatch(addCard(front, back, deckID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);