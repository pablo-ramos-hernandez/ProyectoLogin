import React from 'react'
import { createBottomTabNavigator, BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import { ProyectoPablo } from '../ProyectoPablo'
import QR from '../QR'
import Ionicons from '@expo/vector-icons/Ionicons';


const tab = createBottomTabNavigator()

export const TabNavigation = () => {
  const HomeTabOptions = (): BottomTabNavigationOptions => {
    return ({
      tabBarIcon: ({ color, size }) => <Ionicons name={'home'} size={30} color={color} />
    })
  }
  
  const LoginTabOptions = (): BottomTabNavigationOptions => {
    return ({
      tabBarIcon: ({ color, size }) => <Ionicons name={'scan'} size={30} color={color} />
    })
  }
  return (
      <tab.Navigator screenOptions={{headerShown:false}}>
        <tab.Screen 
        name={"Portafolio"} 
        component={ProyectoPablo}
        options={HomeTabOptions}/>
        <tab.Screen name={"QR"} component={QR}
        options={LoginTabOptions} />
      </tab.Navigator>
    

  )
}