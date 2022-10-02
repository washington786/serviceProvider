import { FlatList, StyleSheet, ScrollView, View,Modal } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainContainerStyles } from "../../../../styles/MainContainers";
import { DrawerScreensStyles } from "../../../../styles/DrawerScreensStyles";
import DashboardCard from "../../../../components/Main/drawer/DashboardCard/DashboardCard";
import { GlobalColors } from "../../../../global/Colors/GlobalColors";

import Icons from "react-native-vector-icons/Feather";

import { Caption, Title } from "react-native-paper";
import DashboardOrderCard from "../../../../components/Main/drawer/DashboardCard/DashboardOrderCard";
import { OrderData } from "../../../../data/OrderData";
import { useNavigation } from "@react-navigation/native";

import { useState } from "react";
import OrderDetailsModal from "../../../../components/Main/drawer/OrderDetailsModal";

const Dashboard = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const date = new Date();

  const handleOrderClick = () => {
    navigation.navigate('orderDetails');
  };

  return (
    <SafeAreaView style={[MainContainerStyles.safeArea, styles.con]}>
      <ScrollView style={[DrawerScreensStyles.con]}>
        <View style={styles.dateCon}>
          <Icons name="clock" size={20} color={GlobalColors.grey5} />
          <Caption style={styles.caption}>
            {date.toDateString().substring(0, 40)}
          </Caption>
        </View>

        <View style={styles.cardsCon}>
          <DashboardCard
            IconName="shopping-bag"
            caption="Orders Added"
            total={24}
          />
          <DashboardCard IconName="clock" caption="Total Pending" total={9} />
          <DashboardCard IconName="truck" caption="Total Dispatch" total={13} />
        </View>

        <View>
          <Title>Orders</Title>

          {OrderData.map((itemData) => {
            return (
              <DashboardOrderCard
                ModeOfTransport={itemData.modeOfTransport}
                customerName={itemData.customerName}
                orderNo={itemData.id}
                orderStatus={itemData.orderStatus}
                onClickMethod={()=>setModalVisible(true)}
                key={itemData.id}
              />
            );
          })}

          {/* <OrderDetailsModal modalVisible={modalVisible}/> */}
          <Modal
            visible={modalVisible}
            style={styles.modalCon}
            animationType="fade"
            transparent={false}
          >
            <View>
              <Title>Hey There Modal!!!!</Title>
            </View>
          </Modal>
          {/* <View>
            <FlatList
              data={OrderData}
              keyExtractor={(item) => {
                return item.id;
              }}
              renderItem={(itemData) => {
                return (
                  <DashboardOrderCard
                    ModeOfTransport={itemData.item.modeOfTransport}
                    customerName={itemData.item.customerName}
                    orderNo={itemData.item.id}
                    orderStatus={itemData.item.orderStatus}
                    onClickMethod={handleOrderClick}
                  />
                );
              }}
            />
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  con: {
    backgroundColor: GlobalColors.white,
  },
  cardsCon: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  dateCon: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginVertical: 5,
    paddingHorizontal: 8,
  },
  caption: {
    paddingHorizontal: 5,
  },
  modalCon:{
    flex: 1,
    backgroundColor: GlobalColors.white,
}
});
