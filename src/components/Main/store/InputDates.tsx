import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { GlobalColors } from "../../../global/Colors/GlobalColors";

interface Inputs {
  placeholder: string;
  length: number;
}
const InputDates = (props: Inputs) => {
  return (
    <View style={styles.con}>
      <TextInput
        placeholder={props.placeholder}
        keyboardType="number-pad"
        maxLength={props.length}
        style={styles.input}
      />
    </View>
  );
};

export default InputDates;

const styles = StyleSheet.create({
  con: {
    borderBottomWidth: 0.6,
    borderBottomColor: GlobalColors.grey3,
    width: "50%",
  },
  input: {
    width: "100%",
    // height:'100%',
  },
});
