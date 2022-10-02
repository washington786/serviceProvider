import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface Texts {
  onPressHandler: () => {};
  text: string;
}

const ForgotText = (props: Texts) => {
  return (
    <View style={styles.con}>
      <TouchableOpacity onPress={props.onPressHandler}>
        <Text style={styles.txt}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotText;

const styles = StyleSheet.create({
    con:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingVertical:15
    },
    txt:{
        fontSize: 16,
        fontWeight:"400"
    }

});
