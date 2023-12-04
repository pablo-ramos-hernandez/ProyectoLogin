import {View } from 'react-native'
import React, { Component } from 'react'

export default class Inicio extends Component {
  render() {
    return (
      <View>
        <drawer.Screen name="Welcome" component={ProfileScreen}/>
        <drawer.Screen name="Login" component={SettingScreen}/>
      </View>
    )
  }
}