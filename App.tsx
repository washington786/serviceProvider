import React from 'react';
import MainNavigation from './src/Navigation/MainNavigation';

// import { useFonts } from "expo-font";
// import { useEffect, useCallback } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   'inter-black': require('./src/global/Fonts/Inter-Black.ttf'),
  //   "inter-bold": require("./src/global/Fonts/Inter-Bold.ttf"),
  //   "inter-extrabold": require("./src/global/Fonts/Inter-ExtraBold.ttf"),
  //   "inter-light": require("./src/global/Fonts/Inter-Light.ttf"),
  //   "inter-extraLight": require("./src/global/Fonts/Inter-ExtraLight.ttf"),
  //   "inter-medium": require("./src/global/Fonts/Inter-Medium.ttf"),
  //   "inter-regular": require("./src/global/Fonts/Inter-Regular.ttf"),
  //   "inter-semibold": require("./src/global/Fonts/Inter-SemiBold.ttf"),
  //   "inter-thin": require("./src/global/Fonts/Inter-Thin.ttf"),
  //   "roboto-black": require("./src/global/Fonts/Roboto-Black.ttf"),
  //   "roboto-bold": require("./src/global/Fonts/Roboto-Bold.ttf"),
  //   "roboto-light": require("./src/global/Fonts/Roboto-Light.ttf"),
  //   "roboto-medium": require("./src/global/Fonts/Roboto-Medium.ttf"),
  //   "roboto-regular": require("./src/global/Fonts/Roboto-Regular.ttf"),
  //   "roboto-thin": require("./src/global/Fonts/Roboto-Thin.ttf"),
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    // <View onLayout={onLayoutRootView}>
    <MainNavigation/>
    // </View>
  );
}

