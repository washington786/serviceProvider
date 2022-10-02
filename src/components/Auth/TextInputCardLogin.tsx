import { View, Text } from 'react-native'
import React from 'react'
import Input from './Input'
import { GlobalColors } from '../../global/Colors/GlobalColors'

const TextInputCardLogin = () => {
  return (
    <View>
      <Input
        iconName="mail"
        placeholder="email"
        size={20}
        color={GlobalColors.grey3}
        keyboardTypes="email-address"
      />
      <Input
        iconName="lock"
        placeholder="Password"
        size={20}
        color={GlobalColors.grey3}
        keyboardTypes="password"
      />
    </View>
  )
}

export default TextInputCardLogin