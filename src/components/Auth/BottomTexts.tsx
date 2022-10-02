import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { GlobalColors } from "../../global/Colors/GlobalColors";

interface Texts {
  text1: string;
  text2: string;
  onClickHandler(): any;
}

const BottomTexts = (props: Texts) => {
  return (
    <View style={[styles.con]}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.texts}>{props.text1}</Text>
        <TouchableOpacity onPress={props.onClickHandler}>
          <Text style={[styles.texts, styles.txt2]}>{props.text2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTexts;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    // position: "absolute",
    // bottom: 10,
  },
  texts: {
    fontSize: 18,
    color: GlobalColors.grey8,
    fontWeight: "400",
  },
  txt2: {
    paddingHorizontal: 8,
    color: GlobalColors.blue,
  },
});
