import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Image }from 'react-native';
import {Card} from 'react-native-elements'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'

export default class FaithApp extends React.Component {
  constructor() {
    super();
    this.state = {
      authToken: false,
      obj: '',
      imgArr: [
        {
          img: img1,
          btn: "Islam",
          text: 'Something'
        },
        {
          img: img2,
          btn: "Buddah",
          text: 'Something'
        },
         {
          img: img3,
          btn: "Hindu",
          text: 'Something'
        },
        {
          img: img4,
          btn: "Chiristian",
          text: 'Something'
        },
      ]
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
    const {imgArr} = this.state
    return (
      <ScrollView>
          {imgArr.map((val) => {
            return(
              <View style={{ marginTop: 30}} >
                <ImageBackground source={val.img}  style={{width:"100%", height:120}}>
                <Text style={{color:"white", fontWeight: 'bold', top:"70%",width: 100 , backgroundColor:"black", opacity:0.6, padding: 7, left:"75%" }}>{val.text}</Text>
                <View style={{width: '35%', left:"65%", bottom: 20 }}>
                <Button color="#F78333" title={val.btn} onPress={() => {}}/>
                </View>
                </ImageBackground>
              </View>
            )
          })}
      </ScrollView>
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
