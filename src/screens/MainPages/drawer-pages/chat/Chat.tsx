import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Dimensions,
} from 'react-native';

import Icons from 'react-native-vector-icons/Feather'
import { GlobalColors } from '../../../../global/Colors/GlobalColors';

export default function Chats() {

  const navigation = useNavigation();

  useEffect(() =>{
    navigation.setOptions(
      {
        title:'Chat List',
      }
    )
  },[] )

  const [chatUser] = useState({
    name: 'Robert Henry',
    profile_image: 'https://randomuser.me/api/portraits/men/0.jpg',
    last_seen: 'online',
  });

  const [currentUser] = useState({
    name: 'Tyson',
  });

  const [messages, setMessages] = useState([
    { sender: 'Daniel Washington', message: 'Hey there!!!!', time: '6:01 PM' },
    {
      sender: 'Albert Luis',
      message: 'Hello, how are you doing?',
      time: '6:02 PM',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const date = new Date();

  function getTime(date: any) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  }

  // setting navigation properties
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: '',
  //     headerLeft: () => (
  //       <View style={styles.headerLeft}>
  //         <TouchableOpacity
  //           style={{ paddingRight: 10 }}
  //           onPress={() => {
  //             navigation.goBack();
  //           }}
  //         >
  //           <Icons
  //             name='arrow-left'
  //             size={30}
  //             color='#fff'
  //           />
  //         </TouchableOpacity>
  //         <Image
  //           style={styles.userProfileImage}
  //           source={{ uri: chatUser.profile_image }}
  //         />
  //         <View
  //           style={{
  //             paddingLeft: 10,
  //             justifyContent: 'center',
  //           }}
  //         >
  //           <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18 }}>
  //             {chatUser.name}
  //           </Text>
  //           <Text style={{ color: '#fff', fontWeight: '300' }}>
  //             {chatUser.last_seen}
  //           </Text>
  //         </View>
  //       </View>
  //     ),
  //     headerRight: () => (
  //       <TouchableOpacity
  //         style={{ paddingRight: 10 }}
  //         onPress={() => {
  //           Alert.alert('Audio Call', 'Audio Call Button Pressed');
  //         }}
  //       >
  //         <Icons name='phone-call' size={28} color='#fff' />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: '#f2f2ff' }}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <View style={{ marginTop: 6 }}>
                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    backgroundColor: GlobalColors.primaryColor,
                    alignSelf:
                      item.sender === currentUser.name
                        ? 'flex-end'
                        : 'flex-start',
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderBottomLeftRadius:
                      item.sender === currentUser.name ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 0 : 8,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                    }}
                  >
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color: '#dfe4ea',
                      fontSize: 14,
                      alignSelf: 'flex-end',
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        {/* bottom input for texting message */}
        <View style={{ paddingVertical: 10 }}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder='type message'
              onChangeText={(text) => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                sendMessage();
              }}
            >
              <Icons name='send' size={20} color={'#000'}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: { height: '100%', aspectRatio: 1, borderRadius: 100 },
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});