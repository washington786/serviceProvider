import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputStore from './Input'
import TextArea from './TextArea'

const InputCard = () => {
  return (
    <View style={styles.con}>
      <InputStore placeholder='Store Name' keyboardTypes='default' inputStyle/>
      <InputStore placeholder='email address' keyboardTypes='email-address' inputStyle/>
      <InputStore placeholder='Office number' keyboardTypes='number' inputStyle/>
      <InputStore placeholder='office alternative number' keyboardTypes='number' inputStyle/>
      <TextArea placeholder='Enter Store description' numberOfLines={3} />
    </View>
  )
}

export default InputCard

const styles = StyleSheet.create({
    con:{
        marginBottom:15,
        marginTop:45
    },
    
})