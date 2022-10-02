import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../../global/Colors/GlobalColors";

import Img from "../../../Assets/cards-p.png";
import Visa from "../../../Assets/card-vector.png";

interface Card {
  customStyle: Object;
}

const CardCon = (props: Card) => {
  return (
    <View style={[styles.mainCon, props.customStyle]}>
      <View style={[styles.con]}>
        <Image source={Img} />
      </View>
      <View style={styles.circleCon}>
        <Image source={Visa} style={styles.vec}/>
      </View>
    </View>
  );
};

export default CardCon;

const styles = StyleSheet.create({
  mainCon: {
    height: "25%",
    marginTOP: 30,
    position: "relative",
  },
  con: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    marginTop: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  circleCon: {
    height: 60,
    width: 60,
    borderRadius: 100,
    position: "absolute",
    right: 15,
    bottom: -45,
    alignItems: "center",
    justifyContent: "center",
  },
  vec:{
    width:'80%',
    resizeMode:"contain"
  }
});
