import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../global/Colors/GlobalColors'


const OTPInput = () => {
  return (
    <View style={styles.inputCon}>
      <TextInput placeholder='-' keyboardType='number-pad' maxLength={1} autoFocus={true} style={styles.input}/>
    </View>
  )
}

export default OTPInput

const styles = StyleSheet.create({
    inputCon:{
        width: 60,
        height: 55,
        borderColor: GlobalColors.grey2,
        borderWidth:0.6,
        marginHorizontal:4,
        borderRadius:8
    },
    input:{
        width:'100%',
        height:'100%',
        borderWidth:0.,
        outline: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
})