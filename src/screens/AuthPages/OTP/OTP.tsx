import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../../components/Auth/Header";
import { GlobalColors } from "../../../global/Colors/GlobalColors";
import { MainContainerStyles } from "../../../styles/MainContainers";

import OTPInput from "../../../components/Auth/OTPInput";
import ButtonComponent from "../../../components/Button/ButtonComponent";

const OTP = () => {
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

  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate("register");
  };

  const onSubmitHandler =()=>{
    navigation.navigate('store');
  }

  return (
    <View style={MainContainerStyles.root}>
      <Header
        onPressHandler={onPressHandler}
        customStyle={styles.headerCon}
        iconName="x"
      />

      <View>
        <Text style={styles.title}>ENTER OTP</Text>

        <View style={styles.textsCon}>
          <Text style={styles.sub}>+27813457912</Text>
          <TouchableOpacity onPress={onPressHandler}>
            <Text style={[styles.sub, styles.changeText]}>change</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.otpCon}>
          <OTPInput />
          <OTPInput />
          <OTPInput />
          <OTPInput />
          <OTPInput />
        </View>

        <View style={[styles.textsCon,styles.resendCon]}>
          <Text style={[styles.sub,styles.resendTxt]}>Didn't receive OTP?</Text>
          <TouchableOpacity onPress={onPressHandler}>
            <Text style={[styles.sub, styles.changeText,styles.resendTxt]}>Resend OTP</Text>
          </TouchableOpacity>
        </View>

        <ButtonComponent
          title="continue"
          btnCustomStyle
          onPressHandler={onSubmitHandler}
        />
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  headerCon: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
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
  textsCon: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 8,
  },
  changeText: {
    color: GlobalColors.greenVector,
    paddingHorizontal: 5,
  },
  otpCon: {
    marginVertical: 15,
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendCon:{
    alignItems: "center",
    justifyContent: "center",
  },
  resendTxt:{
    fontSize:18,
    fontWeight:'500',
  }
});
