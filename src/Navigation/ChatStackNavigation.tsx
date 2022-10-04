import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatListsScreen from '../screens/MainPages/drawer-pages/chat-list/ChatListsScreen';
import Chats from '../screens/MainPages/drawer-pages/chat/Chat';

const ChatStack = createNativeStackNavigator();

const ChatStackNavigation = () => {
  return (
   <ChatStack.Navigator initialRouteName='chat-lists' screenOptions={{ headerShown:false}}>
    <ChatStack.Screen name='chat-list' component={ChatListsScreen}/>
    <ChatStack.Screen name='chats' component={Chats}/>
   </ChatStack.Navigator>
  )
}

export default ChatStackNavigation
