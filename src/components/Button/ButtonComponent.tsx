import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../global/Colors/GlobalColors";

interface Styles{
    btnCustomStyle?: Object,
    title: string,
    onPressHandler(): any,
}
const ButtonComponent = (props: Styles) => {
  return (
    <TouchableOpacity style={[styles.btnCon,props.btnCustomStyle]} onPress={props.onPressHandler}>
      <View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    btnCon:{
        backgroundColor: GlobalColors.primaryColor,
        elevation:2,
        height:45,
        borderRadius:5,
        marginVertical:3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
      fontSize:20,
      color:GlobalColors.white,
      textTransform:'uppercase',
      fontWeight:'500',
    }
});
