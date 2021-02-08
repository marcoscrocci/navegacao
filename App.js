import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'
import Perfil from './src/pages/Perfil'
import NoHeader from './src/pages/NoHeader'
import NovaTela from './src/pages/NovaTela'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen 
          name="Home" 
          component={Tabs} 
          options={{
            title: 'Bem-vindo',
            headerStyle: {
              backgroundColor: '#121212'
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="NovaTela" component={NovaTela} />
        
        <Stack.Screen 
          name="NoHeader" 
          component={NoHeader}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// Para retirar a barra de título
//<Stack.Navigator initialRouteName="Home" headerMode="none">