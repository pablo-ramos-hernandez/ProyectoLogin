import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'

const Welcome = ({navigation}) => {
  const {user} = useContext(UserContext)
  const image = {uri: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/10/new-Pixel-Community-Lens-wallpapers-f.jpg?fit=1200%2C1000&quality=50&strip=all&ssl=1"}
  return (
    <View style={styles.centrar}>
      <ImageBackground source={image} style={styles.image} >
      <Text style={styles.texto}>Bienvenido {user}</Text>
      <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textoBoton}>Login</Text>
      </TouchableOpacity>
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
    fontSize: 35
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
  }
})
export default Welcome