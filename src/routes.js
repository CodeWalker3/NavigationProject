import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Page2 } from './pages/Page2';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false  }}  />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false, headerTitleAlign: 'center'}} />
      <Stack.Screen name="Page2" component={Page2} options={{ headerShown: false, headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  );
}