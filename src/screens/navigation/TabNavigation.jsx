import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ProyectoPablo } from '../ProyectoPablo'
import QR from '../QR'
import Ionicons from 'react-native-vector-icons/Ionicons'

const tab = createBottomTabNavigator()

export const TabNavigation = () => {
  return (
      <tab.Navigator
        initialRouteName={"Proyecto Pablo"}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName
            let rn = route.name

            if (rn == "Proyecto Pablo"){
              iconName = focused ? 'home' : "home-outline"
            } else if (rn === "QR"){
              iconName = focused ? "settings" : "settings-outline"
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          },
        })}>
        <tab.Screen name={"Proyecto Pablo"} component={ProyectoPablo} />
        <tab.Screen name={"QR"} component={QR} />
      </tab.Navigator>
    

  )
}