import { Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {StyleSheet } from 'react-native';

const MenuButtonItems = ({text, onPress, image}) => {
  return (
    <TouchableOpacity
    style={styles.buttonContainer}
    onPress={onPress}>
      <Image
      source={{uri: image}}
      style={styles.fotoPerfil}/>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 15,
    padding: 15
  },
  fotoPerfil:{
    borderRadius: 23,
    height: 50,
    width: 50
  },
  text: {
    marginStart: 7,
  }
})
export default MenuButtonItems