import { View, Text, StyleSheet, ImageBackground} from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'

export const WelcomeSinButton = () => {
  const {user} = useContext(UserContext)
  const image = {uri:"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/10/new-Pixel-Community-Lens-wallpapers-f.jpg?fit=1200%2C1000&quality=50&strip=all&ssl=1"}
  return (
    <View style={styles.centrar}>
      <ImageBackground source={image}style={styles.image}>
      <Text style={[styles.texto, styles.textShadow100]}>Welcome</Text>
      <Text style={[styles.texto, styles.textShadow100]}>{user}</Text>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  centrar:{
    flex: 1,
  },
  texto:{
    textAlign: 'center',
    fontWeight: "bold",
    color: "white",
    fontSize: 50
  },
  boton: {
    padding: 15,
    width: "40%",
    backgroundColor: "#9FFFCB",
    alignSelf: 'center',
    borderRadius: 15
  },
  textoBoton:{
    textAlign:"center",
    fontWeight: "bold",
    color: "black",
    fontSize: 20
  },
  image:{
    flex: 1,
    justifyContent: 'center'
  },
  textShadow100: {
    textShadowColor: "blue",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 20,
  },
})