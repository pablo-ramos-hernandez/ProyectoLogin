import { NavigationContainer } from '@react-navigation/native';
import { DraweNavigation} from "../screens/navigation/DraweNavigation"
import { DraweNavigationFinal } from '../screens/navigation/DraverNavigationFinal';
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import React from 'react'

const Proyecto = () => {
    const {isLogin} = useContext(UserContext)
    return (
      <NavigationContainer>
      {isLogin == "false" ? <DraweNavigation/> : <DraweNavigationFinal/>}
    </NavigationContainer>
    )
}

export default Proyecto