import { StyleSheet, View } from "react-native";
import React from "react";
import { MainContainerStyles } from "../../../styles/MainContainers";
import Top from "../../../components/Auth/Top";

import { useFonts } from 'expo-font'
import { GlobalColors } from "../../../global/Colors/GlobalColors";
import TextInputCard from "../../../components/Auth/TextInputCard";
import ButtonComponent from "../../../components/Button/ButtonComponent";
import BottomTextCard from "../../../components/Auth/BottomTextCard";

const Register = ({navigation}) => {

  useFonts({
    // 'inter-black': require('../../../../../global/'),
    'inter-bold': require('../../../global/Fonts/Inter-Bold.ttf'),
    'inter-extrabold': require('../../../global/Fonts/Inter-ExtraBold.ttf'),
    'inter-light': require('../../../global/Fonts/Inter-Light.ttf'),
    'inter-extraLight': require('../../../global/Fonts/Inter-ExtraLight.ttf'),
    'inter-medium': require('../../../global/Fonts/Inter-Medium.ttf'),
    'inter-regular': require('../../../global/Fonts/Inter-Regular.ttf'),
    'inter-semibold': require('../../../global/Fonts/Inter-SemiBold.ttf'),
    'inter-thin': require('../../../global/Fonts/Inter-Thin.ttf'),
    'roboto-black': require('../../../global/Fonts/Roboto-Black.ttf'),
    'roboto-bold': require('../../../global/Fonts/Roboto-Bold.ttf'),
    // 'roboto-light': require('../../../global/Fonts/Roboto-Light.ttf'),
    'roboto-medium': require('../../../global/Fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('../../../global/Fonts/Roboto-Regular.ttf'),
    'roboto-thin': require('../../../global/Fonts/Roboto-Thin.ttf'),

}
)

  return (
    <View style={MainContainerStyles.root}>

      <Top
        title={"Service Provider Account Details"}
        sub_title={"please enter all required fields to register"}
        mainStyle={styles.container}
        imageStyle={styles.img}
        titleStyle={styles.title}
        subTitleStyle={styles.subTitle}
      />

      <TextInputCard/>

      <ButtonComponent title="Register" btnCustomStyle onPressHandler={()=>navigation.navigate('otp')}/>

      <BottomTextCard onPressHandler={()=>navigation.navigate('login')}/>

    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  img: {
    paddingVertical: 10,
  },
  container: {
    alignItems: "center",
    marginTop: 20
  },
 title:{
        fontFamily:'roboto-regular',
        fontSize: 22,
        color: GlobalColors.grey5,
        textTransform:'capitalize'
    },
    subTitle:{
        fontSize: 14,
    }
});
