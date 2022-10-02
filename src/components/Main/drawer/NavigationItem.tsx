import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";

import { GlobalColors } from "../../../global/Colors/GlobalColors";

interface Nav {
  onClick(): any;
  title: string;
  IconName: String;
}

const NavigationItem = (props: Nav) => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.mainCon}>
        <View style={styles.con}>
          <Feather
            name={props.IconName}
            size={25}
            color={GlobalColors.cWhite7}
            style={{ paddingRight: 15 }}
          />
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NavigationItem;

const styles = StyleSheet.create({
  mainCon: {
    borderBottomColor: GlobalColors.cWhite4,
    borderBottomWidth: 0.3,
    marginLeft: 8,
    marginVertical: 15,
  },
  con: {
    marginVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
  },
  text: {
    color: GlobalColors.cWhite7,
    paddingHorizontal: 15,
    fontSize: 18,
    // paddingLeft: 10,
  },
});
