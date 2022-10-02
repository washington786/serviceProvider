import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalColors } from "../../../../global/Colors/GlobalColors";

import { Caption, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Data {
  image: string;
  out: number;
  total: number;
  qty: number;
  name: string;
  onClick(): any;
}

const StockCard = (props: Data) => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.con}>
        <View style={styles.imgCon}>
          {/* <Image source={props.image.toString()} style={} /> */}
          <Image source={props.image} style={styles.img} />
        </View>
        <View style={styles.contentCon}>
          <View style={styles.topCon}>
            <Title>{props.name}</Title>
            <Caption>Quantity - {props.qty}</Caption>
          </View>

          <View style={{ paddingVertical: 8 }}>
            <View style={styles.cons}>
              <Text>Sold out</Text>
              <Caption>{props.out}</Caption>
            </View>
            <View style={styles.cons}>
              <Text>Total in-stock</Text>
              <Caption>{props.total}</Caption>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StockCard;

const styles = StyleSheet.create({
  con: {
    backgroundColor: GlobalColors.card,
    paddingHorizontal: 5,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  imgCon: {
    borderRadius: 100,
    width: 70,
    height: 70,
    backgroundColor: GlobalColors.white,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  topCon: {
    borderBottomColor: GlobalColors.grey2,
    borderBottomWidth: 0.4,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  contentCon: {
    paddingHorizontal: 8,
    flexDirection: "column",
    flex: 1,
  },
  cons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  img: {
    width: "80%",
    resizeMode: "contain",
  },
});
