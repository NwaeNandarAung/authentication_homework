import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../pages/splash/Splash';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeStack