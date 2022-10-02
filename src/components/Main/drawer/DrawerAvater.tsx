import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Avatar } from "react-native-paper";

import { GlobalColors } from '../../../global/Colors/GlobalColors';

const DrawerAvatars = () => {
  return (
    <View style={styles.con}>
      <Avatar.Image source={{ uri:'https://images.pexels.com/photos/365810/pexels-photo-365810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.Avatar} size={70}/>
      <View style={styles.textsCon}>
        <Text style={styles.name}>Hugh Man Farm Gates</Text>
        <Text style={styles.mail}>hughmanfarms.co.za</Text>
      </View>
    </View>
  )
}

export default DrawerAvatars

const styles = StyleSheet.create({
    con:{
        flexDirection:'row',
        gap: 10,
        marginVertical:15,
        alignItems: 'center',
        color: GlobalColors.white,
        borderBottomColor: GlobalColors.creamWhite,
        borderBottomWidth:0.5,
        paddingVertical:15
    },
    Avatar:{
        resizeMode:'contain',
        backgroundColor: GlobalColors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textsCon:{
        paddingHorizontal:8
    },
    name:{
        color: GlobalColors.white,
        fontSize: 18,
        fontWeight:'500'
    },
    mail:{
        color: GlobalColors.creamWhite,
        fontSize: 14,
        fontWeight:'200'
    },
})