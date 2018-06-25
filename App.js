import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>Powered by Runnaz</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'red',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{color:'white',
fontSize:35,
fontWeight: 'bold'
},
subtitle:{
fontWeight: 'lighter'
}
});
