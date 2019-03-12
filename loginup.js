import React from 'react';
import { StyleSheet, Text, View, Button, Alert, AsyncStorage, ImageBackground, Image }from 'react-native';

export default class LoginApp extends React.Component {
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
        <ImageBackground source={require('./assets/backGrouns.jpg')} style={{ width: '100%', height: '100%' }}>
          <View style={styles.container}>
            {/* {!authToken && <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}><Login token={this.auth} /></View>}
        {authToken && <Navigator />} */}
          
        <View style={styles.font}>
          <Text style={{color:"white", fontWeight:"900", fontSize: 50}}>
              Jom Join
          </Text>
          <Text style={{color:"#F78333",textShadowColor: 'white', textShadowOffset: { width: -4, height: 2 } , fontWeight:"900", fontSize: 70}}>
              Sahabat!
            </Text>
        </View>

          <View style={{top:"10%" , alignItems: 'center',
    justifyContent: 'center', }}>
            <Image  style={{width:100 , height:100}} source={require('./assets/logo.jpg')}/>
          </View>


              <View style={{ top: "20%", width: '80%', padding: 10, height: '20%' }}>
                <Button color="#F78333" title="Daftar Sekarang !" onPress={() => { console.log("sdfkjgdh") }} />
              </View>
              <View style={{ top: "10%", width: '80%', padding: 10, height: '20%' }}>
                <Button color="#FDAD29" title="Sudah Berdaftar? Log Masuk!" onPress={() => { console.log("sdfkjgdh") }} />
              </View>
            </View>
         
         <View style={styles.font}>
           <Text style={{color:"white", bottom:10}}>Developed By:</Text>
           <Image style={{width:100 , height:100, bottom:10}} source={require('./assets/logo2.jpg')}/>
         </View>

        </ImageBackground>
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
