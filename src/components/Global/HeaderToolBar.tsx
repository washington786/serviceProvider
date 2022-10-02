import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../global/Colors/GlobalColors'

interface Toolbar{
    title: string;
}
const HeaderToolBar = (props: Toolbar) => {
  return (
    <View style={styles.con}>
      <Text style={styles.txt}>{props.title}</Text>
    </View>
  )
}

export default HeaderToolBar

const styles = StyleSheet.create({
    con:{
        backgroundColor:GlobalColors.primaryColor,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:15
    },
    txt:{
        color:GlobalColors.white,
        fontSize:20,
        fontWeight: '500',
        textTransform:'uppercase'
    }
})