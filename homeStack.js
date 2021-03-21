import { createStackNavigator } from '@react-navigation/stack';
import About from './Screens/About';
import Home from './Screens/Home';
import ReviewDetails from './Screens/ReviewDetails';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
{/* <Stack.Screen name="Settings" component={} /> */}