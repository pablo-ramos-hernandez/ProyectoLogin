import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'

const Welcome = ({navigation}) => {
  const {user} = useContext(UserContext)
  return (
    <View>
      <Text>Bienvenido {user}</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")}></Button>
    </View>
  )
}

export default Welcome