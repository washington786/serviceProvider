import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import { GlobalColors } from '../../global/Colors/GlobalColors'

import { Feather } from '@expo/vector-icons';

interface Toolbar{
    title: string;
    onPressHandler(): any;
}
const HeaderIconToolBar = (props: Toolbar) => {
  return (
    <View style={styles.con}>
        <TouchableOpacity style={{ alignContent:'flex-start' ,alignItems:'flex-start', justifyContent:'flex-start'}} onPress={props.onPressHandler}>
            <Feather name='arrow-left' size={24} color={GlobalColors.white}/>
        </TouchableOpacity>
      <Text style={styles.txt}>{props.title}</Text>
    </View>
  )
}

export default HeaderIconToolBar

const styles = StyleSheet.create({
    con:{
        backgroundColor:GlobalColors.primaryColor,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:18,
        flexDirection:'row',
        paddingHorizontal:5
    },
    txt:{
        color:GlobalColors.white,
        fontSize:20,
        fontWeight: '500',
        textTransform:'uppercase',
        width:'90%',
        textAlign: 'center',
    }
})