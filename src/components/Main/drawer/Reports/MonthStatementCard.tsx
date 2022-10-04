import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { GlobalColors } from "../../../../global/Colors/GlobalColors";
import { Caption, Title } from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";

interface Data {
  month: string;
  onPressHandler?(): any;
}

const MonthStatementCard = (props: Data) => {
  return (
    <TouchableOpacity onPress={props.onPressHandler}>
      <View
        style={{
          width: "100%",
          backgroundColor: GlobalColors.cWhite4,
          elevation: 0.4,
          paddingHorizontal: 5,
          paddingVertical: 6,
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Title>{props.month}</Title>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Caption>total sales: R12900</Caption>
            <Caption style={{ paddingHorizontal: 8 }}>total orders: 89</Caption>
          </View>
        </View>
        <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
          <Icons name="download" size={25} color={GlobalColors.grey3} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MonthStatementCard;

const styles = StyleSheet.create({});
