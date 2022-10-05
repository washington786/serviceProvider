import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MainContainerStyles } from "../../../styles/MainContainers";
import ImageCard from "../../../components/Main/store/ImageCard";
import InputCard from "../../../components/Main/store/InputCard";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import HeaderToolBar from "../../../components/Global/HeaderToolBar";
import { SafeAreaView } from "react-native-safe-area-context";

const AddStore = () => {
  const navigation = useNavigation();

  const onSubmitHandler = () => {
    navigation.navigate("addStorePayment");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderToolBar title="Add Store" />

      <View style={[MainContainerStyles.root, styles.con]}>
        <ImageCard customStyle />

        <InputCard />

        <ButtonComponent
          title="continue"
          btnCustomStyle
          onPressHandler={onSubmitHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddStore;

const styles = StyleSheet.create({
  con: {
    // marginTop: 20,
  },
});
