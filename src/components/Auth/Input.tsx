import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

import { GlobalColors } from '../../global/Colors/GlobalColors';

import { Feather } from '@expo/vector-icons';

interface Inputs{
    iconName: string,
    placeholder:string,
    size: number,
    color: string,
    keyboardTypes: string,
}

const Input = (props: Inputs) => {
  return (
    <View style={styles.container}>
        <Feather name={props.iconName} size={props.size} color={props.color}/>
        <TextInput placeholder={props.placeholder} keyboardType={props.keyboardTypes} style={styles.input}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems: 'center',
        borderColor: GlobalColors.grey3,
        borderWidth:1,
        height:45,
        paddingHorizontal:8,
        marginVertical:10,
        borderRadius:5,
    },
    input:{
        paddingHorizontal:8,
        height:'100%',
        width:'100%',
    }
})