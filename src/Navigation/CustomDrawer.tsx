import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainContainerStyles } from "../styles/MainContainers";
import { GlobalColors } from "../global/Colors/GlobalColors";
import DrawerAvatars from "../components/Main/drawer/DrawerAvater";
import NavigationItem from "../components/Main/drawer/NavigationItem";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {

  const navigation = useNavigation();
  
  const transitToDashboard=()=>{
    navigation.navigate('Dashboard');
  }
  const transitToHistory=()=>{
    navigation.navigate('orderHistory');
  }
  const transitToMessages=()=>{
    navigation.navigate('messages');
  }
  const transitToStock=()=>{
    navigation.navigate('stock');
  }

  const transitToReports=()=>{
    navigation.navigate('reports');
  }

  const Logout=()=>{
    navigation.navigate('auth');
  }

  return (
    <SafeAreaView style={[MainContainerStyles.safeArea, styles.con]}>
      <View style={[MainContainerStyles.root, styles.con]}>
        <DrawerAvatars />
        <DrawerContentScrollView {...props}>
          <View>
            <View style={{ marginTop: 40 }}>
              <NavigationItem IconName={'home'} onClick={transitToDashboard} title={'Dashboard'}/>
              <NavigationItem IconName={'clock'} onClick={transitToHistory} title={'Order History'}/>
              <NavigationItem IconName={'message-square'} onClick={transitToMessages} title={'Messages'}/>
              <NavigationItem IconName={'clipboard'} onClick={transitToStock} title={'Products'}/>
              <NavigationItem IconName={'file'} onClick={transitToReports} title={'Reports'}/>
            </View>
          </View>
        </DrawerContentScrollView>
        <View style={{ position: "absolute", bottom: 15, left: 15, right: 15 }}>
          <NavigationItem IconName={'log-out'} onClick={Logout} title={'Logout'}/>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  con: {
    backgroundColor: GlobalColors.primaryColor,
  },
  versionText: {
    color: GlobalColors.cWhite5,
    paddingHorizontal: 15,
  },
});
