import React, { Component } from "react";

import { StyleSheet, View } from "react-native";

import Input from "./Input";
import NormalText from "./NormalText";

class LabeledInput extends Component {
  render() {
    return (
      <View style={styles.labelWrapper}>
        <NormalText style={styles.label}>
          {this.props.label}
        </NormalText>
        {/* <Input
          onEntry={this.props.onEntry}
          onChange={this.props.onChange}
          clearOnSubmit={this.props.clearOnSubmit}
          style={this.props.inputStyle}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    margin: 10,

    paddingRight: 12,
    textAlign: 'right',
    fontSize: 8
  },
  labelWrapper: {
    padding: 5,
    borderRadius: 10
  }
});

export default LabeledInput;