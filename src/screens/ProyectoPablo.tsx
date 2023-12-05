import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import SubheaderPablo from '../components/SubheaderPablo'
import ListaPablo from '../components/ListaPablo'


export const ProyectoPablo = () => {
  const [oscuro, setOscuro] = useState(true);
  return (
    <View>
      {oscuro ? (
        <View style={styles.containerWhite}>
          <Header setOscuro={setOscuro}></Header>
            <View style={styles.carta}>
              <SubheaderPablo></SubheaderPablo>
              <ListaPablo></ListaPablo>
            </View>
        </View>
      ) : (
        <View style={styles.containerOscuro}>
          <Header setOscuro={setOscuro}></Header>
            <View style={styles.carta}>
              <SubheaderPablo></SubheaderPablo>
              <ListaPablo></ListaPablo>
            </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  bodystails: {
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: "50%",
  },
  containerOscuro: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
  },

  bodystailsBlack: {
    borderColor: "black",
    width: "100%",
    marginBottom: "50%",
  },
  carta: {
    borderRadius: 15,
    backgroundColor: "lightblue",
    padding: 8,
    marginTop: "15%",
    marginLeft: "10%",
    width: "80%",
  },
  containerWhite: {
    width: "100%",
  },
})