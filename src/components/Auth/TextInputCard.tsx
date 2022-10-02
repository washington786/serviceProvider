import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
import { GlobalColors } from "../../global/Colors/GlobalColors";

const TextInputCard = () => {
  return (
    <View>
      <Input
        iconName="user"
        placeholder="First Name"
        size={20}
        color={GlobalColors.grey3}
        keyboardTypes="default"
      />
      <Input
        iconName="user"
        placeholder="Last Name"
        size={20}
        color={GlobalColors.grey3}
        keyboardTypes="default"
      />
      <Input
        iconName="mail"
        placeholder="email"
        size={20}
        color={GlobalColors.grey3}
        keyboardTypes="email-address"
      />
      <Input
        iconName="map-pin"
        placeholder="City"
        size={20}
        color={GlobalColors.grey3}
        keyboardTypes="default"
      />
      <Input
        iconName="lock"
        placeholder="Password"
        size={20}
        color={GlobalColors.grey3}
        keyboardTypes="password"
      />
      <Input
        iconName="lock"
        placeholder="Confirm Password"
        size={20}
        color={GlobalColors.grey3}
        keyboardTypes="password"
      />
    </View>
  );
};

export default TextInputCard;

const styles = StyleSheet.create({});
