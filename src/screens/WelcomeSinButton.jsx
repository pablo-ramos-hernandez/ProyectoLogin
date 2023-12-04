import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider'

export const WelcomeSinButton = () => {
  const {user} = useContext(UserContext)
  return (
    <View>
      <Text>Bienvenido{user}</Text>
    </View>
  )
}