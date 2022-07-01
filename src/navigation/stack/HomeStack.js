import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../pages/dashboard/Dashboard';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeStack