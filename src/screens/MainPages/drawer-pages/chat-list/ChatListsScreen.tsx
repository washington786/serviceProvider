import { FlatList, StyleSheet, View, Modal } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainContainerStyles } from "../../../../styles/MainContainers";


import ChatListsCard from "../../../../components/Main/drawer/Chat/ChatListsCard";
import { ChatData } from "../../../../data/ChatData";
import { useNavigation } from "@react-navigation/native";
import { GlobalColors } from "../../../../global/Colors/GlobalColors";



const ChatListsScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() =>{
    navigation.setOptions(
      {
        title:'Chat List',
      }
    )
  },[] )

  const handleChatPress = () => {
    // navigation.navigate('');
  };

  return (
    <SafeAreaView style={MainContainerStyles.safeArea}>
      <View style={MainContainerStyles.container}>
        <FlatList
          data={ChatData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={(itemData) => {
            return (
              <ChatListsCard
                message={itemData.item.message.substring(0, 30)}
                name={itemData.item.name}
                time={itemData.item.time}
                onClick={handleChatPress}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatListsScreen;

const styles = StyleSheet.create({});
