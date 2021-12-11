import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen'

export default function LoginScreen() {
  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require('../assets/SAIB_Logo.png')}
      />
      <AppButton title="Login" onPress={()=>console.log("Button clicked")} width="80%" ></AppButton>
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo:{
      width: '80%',
      resizeMode: 'contain',
      alignSelf:'center'
}})
