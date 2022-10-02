import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalColors } from "../../../global/Colors/GlobalColors";

import Img from "../../../Assets/image-empty.png";

import { Feather } from '@expo/vector-icons';

interface Card {
  customStyle: Object;
}

const ImageCard = (props: Card) => {
  return (
    <View style={[styles.mainCon,props.customStyle]}>
      <View style={[styles.con]}>
        <Image source={Img} />
      </View>
      <View style={styles.circleCon}>
        <Feather name={"camera"} size={30} color={GlobalColors.white}/>
      </View>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  mainCon: {
    height: "25%",
    marginTOP:30,
    position: "relative",
  },
  con: {
    width: "100%",
    backgroundColor: GlobalColors.creamWhite,
    height: "100%",
    borderRadius: 5,
    marginTop: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  circleCon:{
    height: 60,
    width: 60,
    borderRadius:100,
    position: "absolute",
    right:15,
    bottom:-35,
    backgroundColor: GlobalColors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  }
});
