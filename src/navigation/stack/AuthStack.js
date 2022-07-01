import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';
import LoginPassword from '../../pages/auth/LoginPassword';
import RegisterPassword from '../../pages/auth/RegisterPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="Login Security" component={LoginPassword}></Stack.Screen>
      <Stack.Screen name="Register Security" component={RegisterPassword}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthStack