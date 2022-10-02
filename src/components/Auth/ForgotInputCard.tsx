import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'
import { GlobalColors } from '../../global/Colors/GlobalColors'

const ForgotInputCard = () => {
  return (
    <View style={styles.con}>
      <Input
        iconName="mail"
        placeholder="email"
        size={20}
        color={GlobalColors.grey3}
        keyboardTypes="email-address"
      />
    </View>
  )
}

export default ForgotInputCard

const styles = StyleSheet.create({
    con:{
        marginVertical:10
    }
})