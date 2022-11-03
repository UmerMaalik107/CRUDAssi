import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Insert from './Insert';
import View2 from './view'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
 
    <Stack.Navigator>
      
    <Stack.Screen name="Insert Screen" component={Insert} />
    <Stack.Screen name="View Screen" component={View2} />
     
     

    </Stack.Navigator>
  </NavigationContainer>
  );
}

