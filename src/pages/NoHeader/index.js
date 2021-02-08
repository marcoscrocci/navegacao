import React from 'react'
import { View, Text, Button } from 'react-native'

export default function NoHeader({ navigation }) {
  return (
    <View>
      <Text> NoHeader </Text>
      <Button 
        title="Perfil"
        onPress={ () => navigation.navigate('Perfil', { nome: 'Marcos' })}
      />
      <Button 
        title="Voltar"
        onPress={ () => navigation.goBack()}
      />
      {/* <Button 
        title="Muda titulo"
        onPress={ () => navigation.setOptions({ title: 'Principal' })}
      /> */}
    </View>
  )
}