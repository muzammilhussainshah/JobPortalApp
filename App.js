import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Routes from "./src/routes";

export default class App extends Component {


  componentWillMount() {
    console.disableYellowBox = true
  }
  render() {
    return (
      
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    )
  }
}
