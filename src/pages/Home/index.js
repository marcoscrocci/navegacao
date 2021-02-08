import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View>
      <Text> Home </Text>
      <Button 
        title="Perfil"
        onPress={ () => navigation.navigate('Perfil', { nome: 'Marcos' })}
      />
      <Button 
        title="NovaTela"
        onPress={ () => navigation.navigate('NovaTela', { nome: 'Marcos' })}
      />
      <Button 
        title="NoHeader"
        onPress={ () => navigation.navigate('NoHeader', { nome: 'Teste' })}
      />
      {/* <Button 
        title="Muda titulo"
        onPress={ () => navigation.setOptions({ title: 'Principal' })}
      /> */}
    </View>
  )
}