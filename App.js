import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AsyncStorage, ImageBackground, Image }from 'react-native';
import LoginApp from './loginup'
import FaithApp from './myFaith'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authToken: false,
      obj: ''
    }
    // this.auth = this.auth.bind(this)
  }


  auth = (e) => {

    this.setState({
      authToken: true,
      obj: e
    })
    console.log('e', e)
  }


  render() {
    const { authToken } = this.state
    return (
      <View>
        {/* <LoginApp /> */}
        <FaithApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "monospace",
    alignItems: 'center',
    justifyContent: 'center',
    color:"white"
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
