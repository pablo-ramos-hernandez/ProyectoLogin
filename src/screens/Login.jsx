import { View, Text, TextInput, StyleSheet, Button} from 'react-native'
import React, { useContext } from 'react'
import { UserContext} from '../providers/UserProvider'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = ({navigation}) => {
  const {login} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
  const {user} = useContext(UserContext)
  const {isLogin} = useContext(UserContext)
  return (
    <View style={styles.headline}>
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
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  headline: {
    flex: 1,
    marginTop: "50%",
  },
  text:{
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 18,
  },
  boton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 15,
    padding: 15
  }
});
export default Login