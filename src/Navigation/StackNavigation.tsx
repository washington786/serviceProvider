import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigation from "./AuthStackNavigation";
import StoreStackNavigation from "./StoreStackNavigation";
import DrawerNavigation from "./DraweNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth" component={AuthStackNavigation} />
      <Stack.Screen name="drawer" component={DrawerNavigation} />
      <Stack.Screen name="store" component={StoreStackNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
