import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTexts from './BottomTexts'

interface Handler{
    onPressHandler:()=>{},
}

const BottomTextCardLogin = (props: Handler) => {
  return (
    <View style={styles.con}>
      <BottomTexts text1="Already have an account?" text2="Sign Up" onClickHandler={props.onPressHandler}/>
    </View>
  )
}

export default BottomTextCardLogin

const styles = StyleSheet.create({
    con:{
        alignItems: 'center',
        position:'absolute',
        bottom:10,
        left:0,
        right:0
    }
})