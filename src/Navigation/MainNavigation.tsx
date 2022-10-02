import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigation from "./StackNavigation";

import { StatusBar } from "expo-status-bar";

const MainNavigation = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};

export default MainNavigation;
