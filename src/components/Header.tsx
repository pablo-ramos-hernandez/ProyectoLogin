import { View, Text, Button } from 'react-native'
import React from 'react'
import {StyleSheet } from 'react-native';

type HeaderProps = {
  setOscuro: Function
}

function Header(props: HeaderProps){
  return (
    <View style={styles.topContainer}>
      <Text style={styles.firsttoprowContainer}>My Portfolio App</Text>
      <View style={styles.rowTopSecondContainer}>
        <Button onPress={() => props.setOscuro(false)} title='Oscuro' color={"lightgreen"} />
        <Button onPress={() => props.setOscuro(true)} title='Normal' color={"lightgreen"}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
topContainer: {
    width: '100%',
  },
  firsttoprowContainer: {
    backgroundColor: 'lightgreen',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 30,
    padding: 10,
    color: 'white',
  },

  rowTopSecondContainer: {
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 5
  },
})
export default Header