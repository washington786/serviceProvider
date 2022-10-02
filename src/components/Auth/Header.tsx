import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";
import { GlobalColors } from "../../global/Colors/GlobalColors";

interface Headers {
  onPressHandler(): any;
  customStyle: Object;
  iconName: string;
}

const Header = (props: Headers) => {
  return (
    <View style={[styles.con,props.customStyle]}>
      <TouchableOpacity onPress={props.onPressHandler}>
        <Feather name={`${props.iconName}`} size={24} color={GlobalColors.grey4} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  con: {
    marginVertical:18,
    paddingVertical:10
  },
});
