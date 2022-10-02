import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MainContainerStyles } from "../../../styles/MainContainers";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderIconToolBar from "../../../components/Global/HeaderIconToolBar";
import { useNavigation } from "@react-navigation/native";
import CardCon from "../../../components/Main/store/CardCon";
import { GlobalColors } from "../../../global/Colors/GlobalColors";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-gesture-handler";
import InputStore from "../../../components/Main/store/Input";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import InputDates from "../../../components/Main/store/InputDates";

const AddStorePaymentDetails = () => {
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

  const handler = () => {
    navigation.goBack();
  };

  const onSubmitHandler = () => {
    navigation.navigate("addStoreAddress");
  };

  return (
    <SafeAreaView style={MainContainerStyles.safeArea}>
      <HeaderIconToolBar
        title="store payment details"
        onPressHandler={handler}
      />

      <View style={MainContainerStyles.root}>
        <CardCon customStyle />

        <View style={styles.txtCon}>
          <Text style={styles.title}>Card Details</Text>
          <Text style={styles.sub}>
            please enter your store banking details for online payments.
          </Text>
        </View>

        <View>
          <InputStore
            placeholder="Name on Card"
            keyboardTypes="default"
            inputStyle
          />
          <InputStore
            placeholder="Card Number"
            keyboardTypes="number-pad"
            inputStyle
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <View style={styles.datesInput}>
              <InputDates placeholder="mm" length={2} />
              <InputDates placeholder="yy" length={2} />
            </View>

            <View style={styles.cvv}>
              <InputDates placeholder="cvv" length={3} />
            </View>
          </View>
        </View>

        <ButtonComponent
          title="continue"
          btnCustomStyle={styles.btn}
          onPressHandler={onSubmitHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddStorePaymentDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "roboto-medium",
    color: GlobalColors.grey4,
  },
  sub: {
    fontSize: 12,
    fontFamily: "roboto-light",
    paddingVertical: 5,
    color: GlobalColors.grey3,
  },
  txtCon: {
    marginTop: 40,
    marginBottom: 15,
  },
  datesInput: {
    flexDirection: "row",
    width: "20%",
  },
  cvv: {
    width: "50%",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  btn:{
    marginTop:25
  }
});
