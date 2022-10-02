import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MainContainerStyles } from "../../../styles/MainContainers";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderIconToolBar from "../../../components/Global/HeaderIconToolBar";
import { useNavigation } from "@react-navigation/native";
import InputStore from "../../../components/Main/store/Input";
import ButtonComponent from "../../../components/Button/ButtonComponent";

const AddStoreAddress = () => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  const onSubmitHandler=() => {
    navigation.navigate('drawer');
  }
  
  return (
    <SafeAreaView style={MainContainerStyles.safeArea}>
      <HeaderIconToolBar title="Store Address" onPressHandler={onGoBack} />
      <View style={MainContainerStyles.root}>
        <View>
          <InputStore
            placeholder="City"
            keyboardTypes="default"
            inputStyle
          />
          <InputStore
            placeholder="Town"
            keyboardTypes="default"
            inputStyle
          />
          <InputStore
            placeholder="Region/State/Province"
            keyboardTypes="default"
            inputStyle
          />
          <InputStore
            placeholder="Zip Code"
            keyboardTypes="number-pad"
            inputStyle
          />
          <InputStore
            placeholder="Address Line1"
            keyboardTypes="default"
            inputStyle
          />
          <InputStore
            placeholder="Address Line2"
            keyboardTypes="default"
            inputStyle
          />
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

export default AddStoreAddress;

const styles = StyleSheet.create({
  btn:{
    marginTop:30
  }
});
