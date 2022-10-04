import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainContainerStyles } from "../../../../styles/MainContainers";
import { useNavigation } from "@react-navigation/native";

import Icons from 'react-native-vector-icons/Feather';
import { GlobalColors } from "../../../../global/Colors/GlobalColors";
import { Caption } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { OrderData } from "../../../../data/OrderData";
import DashboardOrderCard from "../../../../components/Main/drawer/DashboardCard/DashboardOrderCard";

const OrderHistory = () => {

  const navigation =useNavigation();

  React.useEffect(() =>{
    navigation.setOptions(
      {
        title:'Order History',
      }
    )
  },[] )

  const handlePress=() => {
    console.log('clicked!!!!!!');
  }

  return (
    <SafeAreaView style={MainContainerStyles.safeArea}>
      <View style={MainContainerStyles.container}>
        <View style={styles.conFilter}>
            <View style={{ flexDirection:'row',borderColor:GlobalColors.grey2,borderWidth:0.4,padding:5 }}>
              <Icons name='calendar' size={20} color={GlobalColors.grey5}/>
              <Caption style={{ paddingHorizontal:8 }}>Filter</Caption>
              <Icons name='chevron-down' size={20} color={GlobalColors.grey5}/>
            </View>
        </View>
        <View style={{ paddingBottom:80,paddingTop:15 }}>
            <FlatList
              showsVerticalScrollIndicator = {false}
              data={OrderData}
              keyExtractor={(item)=>{return item.id}}
              renderItem={(itemData)=>{
                return(
                  <DashboardOrderCard
                    customerName={itemData.item.productName}
                    ModeOfTransport={itemData.item.modeOfTransport}
                    orderNo={itemData.item.id}
                    orderStatus={itemData.item.orderStatus}
                    onClickMethod={handlePress}
                  />
                )
              }}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  conFilter:{
    alignItems:'flex-end',
    justifyContent:'flex-end',
  }
});
