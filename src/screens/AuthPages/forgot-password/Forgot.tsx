import { Image, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MainContainerStyles } from "../../../styles/MainContainers";
import Header from "../../../components/Auth/Header";
import { useNavigation } from "@react-navigation/native";

import { useFonts } from "expo-font";
import { GlobalColors } from "../../../global/Colors/GlobalColors";
import ForgotInputCard from "../../../components/Auth/ForgotInputCard";
import ButtonComponent from "../../../components/Button/ButtonComponent";

import { useState } from "react";
import { ModalStyles } from "../../../styles/Modal";

import Done from "../../../Assets/check-circle.png";

const Forgot = () => {
  useFonts({
    "inter-black": require("../../../global/Fonts/Inter-Black.ttf"),
    "inter-bold": require("../../../global/Fonts/Inter-Bold.ttf"),
    "inter-extrabold": require("../../../global/Fonts/Inter-ExtraBold.ttf"),
    "inter-light": require("../../../global/Fonts/Inter-Light.ttf"),
    "inter-extraLight": require("../../../global/Fonts/Inter-ExtraLight.ttf"),
    "inter-medium": require("../../../global/Fonts/Inter-Medium.ttf"),
    "inter-regular": require("../../../global/Fonts/Inter-Regular.ttf"),
    "inter-semibold": require("../../../global/Fonts/Inter-SemiBold.ttf"),
    "inter-thin": require("../../../global/Fonts/Inter-Thin.ttf"),
    "roboto-black": require("../../../global/Fonts/Roboto-Black.ttf"),
    "roboto-bold": require("../../../global/Fonts/Roboto-Bold.ttf"),
    "roboto-light": require("../../../global/Fonts/Roboto-Light.ttf"),
    "roboto-medium": require("../../../global/Fonts/Roboto-Medium.ttf"),
    "roboto-regular": require("../../../global/Fonts/Roboto-Regular.ttf"),
    "roboto-thin": require("../../../global/Fonts/Roboto-Thin.ttf"),
  });

  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.goBack();
  };

  const onSubmitHandler = () => {
    setModalVisible(true);
  };

  const transitToLoginHandler = () => {
    navigation.navigate("login");
    setModalVisible(!modalVisible);
  };

  const ModalTitleText =
    "password reset link successfully sent to your email. please check your email for more instructions.";

  return (
    <View style={MainContainerStyles.root}>
      <Header onPressHandler={onPressHandler} customStyle iconName="arrow-left"/>

      <View>
        <Text style={styles.title}>Forgot Your Password?</Text>
        <Text style={styles.sub}>
          enter your registered email address to receive a link to reset your
          password in no time.
        </Text>
      </View>

      <ForgotInputCard />

      <ButtonComponent
        title="SUBMIT"
        btnCustomStyle
        onPressHandler={onSubmitHandler}
      />

      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={false}
        style={{ flex: 1, backgroundColor: GlobalColors.creamWhite }}
      >
        <View style={[MainContainerStyles.root, ModalStyles.con]}>
          <View style={styles.con}>
            <Image source={Done} style={styles.img} />
            <Text
              style={[styles.sub, { textAlign: "center", paddingVertical: 10 }]}
            >
              {ModalTitleText}
            </Text>
          </View>
          <View style={styles.btnCon}>
            <ButtonComponent
              title="GO TO LOGIN"
              btnCustomStyle
              onPressHandler={transitToLoginHandler}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "roboto-medium",
  },
  sub: {
    fontSize: 12,
    fontFamily: "roboto-light",
    paddingVertical: 5,
    color: GlobalColors.grey3,
  },
  img: {
    height: 80,
    width: 80,
    resizeMode: "contain",
  },
  con: {
    flexDirection: "column",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  btnCon:{
    width: "100%",
    marginVertical:8
  }
});
