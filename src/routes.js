import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './pages/Home';
import { Login } from './pages/login';
import { Page2 } from './pages/Page2';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false  }}  />
      <Stack.Screen name="login" component={Login} options={{ title: 'Curso Técnicos', headerTitleAlign: 'center'}} />
      <Stack.Screen name="Page2" component={Page2} options={{ title: 'Cursos Superiores', headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  );
}