import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../../../global/Colors/GlobalColors";

import { Avatar, Caption, Title } from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";

interface Data {
  name: string;
  time: string;
  message: string;
  onClick(): any;
}

const ChatListsCard = (props: Data) => {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <View style={styles.card}>
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
            paddingRight: 8,
          }}
        >
          <Avatar.Icon
            icon={({ size, color }) => (
              <Icons name="user" size={size} color={color} />
            )}
            size={40}
            color={GlobalColors.grey4}
            style={styles.Avatar}
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Title>{props.name}</Title>
            <Caption>{props.time}am</Caption>
          </View>
          <View>
            <Caption>{props.message}...</Caption>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListsCard;

const styles = StyleSheet.create({
  card: {
    padding: 8,
    backgroundColor: "transparent",
    borderBottomColor: GlobalColors.grey2,
    borderBottomWidth: 0.5,
    elevation: 0,
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    marginVertical: 10,
  },
  Avatar: {
    backgroundColor: GlobalColors.lowWhite,
  },
  cardContent: {
    flexDirection: "row",
    backgroundColor: "yellow",
  },
});
