import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalColors } from '../../../../global/Colors/GlobalColors'

import { Feather } from '@expo/vector-icons';
import { Caption, Title } from 'react-native-paper';

interface Card{
  IconName: string;
  caption: string;
  total: number;
}

const DashboardCard = (props: Card) => {
  return (
    <View style={styles.con}>

      <View style={styles.con2}>
        <View style={styles.con3}>
            <Feather name={props.IconName} size={28} color={GlobalColors.white}/>
        </View>
      </View>

      <View style={styles.con4}>
        <Title>{props.total}</Title>
        <Caption>{props.caption}</Caption>
      </View>

    </View>
  )
}

export default DashboardCard

const styles = StyleSheet.create({
    con:{
        width:'30%',
        minHeight:120,
        maxWidth:120,
        backgroundColor: GlobalColors.cWhite8,
        borderRadius:2,
        elevation:2,
        marginHorizontal:5
    },
    con2:{
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:5
    },
    con3:{
      width:60,
      height:60,
      backgroundColor: GlobalColors.primaryColor,
      borderRadius:100,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    con4:{
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    }
})