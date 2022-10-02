import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { GlobalColors } from "../../../global/Colors/GlobalColors";

interface Data{
  placeholder: string;
  customStyle: object;
  numberOfLines: number;
}

const TextArea = (props: Data) => {
  return (
    <View style={[styles.container, props.customStyle]}>
      <TextInput
        placeholder={props.placeholder}
        multiline={true}
        numberOfLines={props.numberOfLines}
        style={styles.input}
        keyboardType="default"
      />
    </View>
  );
};

export default TextArea;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: GlobalColors.grey2,
    borderWidth: 0.6,
    minHeight: 90,
    paddingHorizontal: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
  input: {
    paddingHorizontal: 8,
    height: "100%",
    width: "100%",
  },
});
