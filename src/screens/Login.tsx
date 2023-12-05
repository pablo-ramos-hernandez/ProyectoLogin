import { View, Text, TextInput, StyleSheet, ImageBackground} from 'react-native'
import React, { useContext } from 'react'
import { UserContext} from '../providers/UserProvider'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = ({navigation}) => {
  const {login} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
  const image = {uri: "https://png.pngtree.com/background/20230517/original/pngtree-images-for-wallpaper-wallpaper-galaxy-space-wallpaper-and-stars-picture-image_2639256.jpg"}
  return (
    <View style={styles.headline}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Login</Text>
      <TextInput
      onChangeText={setUser}
      style={styles.input}
      placeholder='Usuario'
      />
      <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder='Password'/>
      <TouchableOpacity
      style={styles.boton}
      onPress={() => { navigation.navigate("Welcome"),login()}}>
        <Text style={styles.textBoton}>Login</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: 300,
    marginLeft: "10%",
    borderWidth: 3,
    padding: 10,
    borderColor: "white",
    backgroundColor: "grey",
    borderRadius: 15
  },
  headline: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  text:{
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
    color: "white"
  },
  boton: {
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    borderRadius: 15,
    marginLeft: "23%",
    width: 200,
    padding: 15
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  },
  textBoton:{
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
    color: "black"
  }
});
export default Login