import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import { GlobalColors } from "../../../global/Colors/GlobalColors";

interface Inputs {
  placeholder: string;
  keyboardTypes: string;
  inputStyle: Object;
  textConfig?: Object;
}

const InputStore = (props: Inputs) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        keyboardType={props.keyboardTypes}
        style={[styles.input, props.inputStyle]}
        {...props.textConfig}
      />
    </View>
  );
};

export default InputStore;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: GlobalColors.grey2,
    borderWidth: 0.6,
    height: 45,
    paddingHorizontal: 8,
    marginVertical: 10,
    borderRadius: 0,
  },
  input: {
    paddingHorizontal: 8,
    height: "100%",
    width: "100%",
  },
});
