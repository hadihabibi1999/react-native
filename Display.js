import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'


const Display = ({ state }) => (
  <View style={styles.container}>
    <SafeAreaView style={styles.safe}>
      <Text
        style={styles.display}
        adjustsFontSizeToFit
        numberOfLines={1}
      >{state.display}</Text>
      { state.result !== '' &&
        <Text
          style={styles.result}
          adjustsFontSizeToFit
          numberOfLines={1}
        >{state.result}</Text>
      }
    </SafeAreaView>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#202020',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  safe: {
    flex: 1,
    justifyContent: 'space-around',
  },
  display: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: "white",
    fontSize: 40,
  },
  result: {
    textAlign: 'right',
    color: "white",
    fontSize: 30,
  },
})

export default Display;