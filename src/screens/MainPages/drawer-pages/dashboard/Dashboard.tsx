import { FlatList, StyleSheet, ScrollView, View, Modal,TouchableOpacity } from "react-native";
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
import HeaderIconToolBar from "../../../../components/Global/HeaderIconToolBar";
import ButtonComponent from "../../../../components/Button/ButtonComponent";

const Dashboard = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const date = new Date();

  const handleOrderClick = () => {
    setModalVisible(false);
  };

  const handleTransitToChat = () => {
    setModalVisible(false);
    // navigation.navigate("reports");
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
                onClickMethod={() => setModalVisible(true)}
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
            <HeaderIconToolBar
              title="Order Details"
              onPressHandler={handleOrderClick}
            />

            <View style={MainContainerStyles.container}>
              <View
                style={{
                  width: "100%",
                  backgroundColor: GlobalColors.cWhite4,
                  elevation: 0.4,
                  paddingHorizontal: 5,
                  paddingVertical: 6,
                  marginTop: 30,
                }}
              >
                <View
                  style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
                >
                  <Caption>10:40am</Caption>
                </View>

                <View style={{ paddingVertical: 8 }}>
                  <View
                    style={{
                      borderBottomColor: GlobalColors.grey1,
                      borderBottomWidth: 0.4,
                      paddingBottom: 5,
                    }}
                  >
                    <Title>Customer Name: Daniel Washington</Title>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Icons
                        name="map-pin"
                        size={16}
                        color={GlobalColors.grey4}
                      />
                      <Caption style={{ paddingHorizontal: 8 }}>
                        123th Avenue Str, Laden, Pretoria
                      </Caption>
                    </View>
                  </View>
                  <View style={{ marginTop: 8 }}>
                    <Caption>#484hd94jd9</Caption>
                    <Caption>Product Name: Macaramba Spinach, & Zuas</Caption>
                    <Caption>Order Amount: R199.99</Caption>
                    <Caption>Despatch Date: 13-Aug-2022</Caption>
                    <Caption>Paid</Caption>
                  </View>
                </View>
              </View>

              <View style={{ marginTop: 15 }}>
                <View>
                  <ButtonComponent
                    title="Cancel"
                    btnCustomStyle={{
                      backgroundColor: GlobalColors.cancelBtnColor,
                    }}
                    onPressHandler={handleOrderClick}
                  />
                </View>
                <View>
                  <ButtonComponent
                    title="Ready"
                    onPressHandler={handleOrderClick}
                  />
                </View>
              </View>
            </View>


            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 100,
                backgroundColor: GlobalColors.primaryColor,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                bottom: 15,
                right: 15,
                overflow: "hidden",
                zIndex:-1
              }}
            >
              <TouchableOpacity
                style={{
                  height: "100%",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex:100,
                }}
                onPress={handleTransitToChat}
              >
                <Icons
                  name="message-square"
                  size={30}
                  color={GlobalColors.white}
                />
              </TouchableOpacity>
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
  modalCon: {
    flex: 1,
    backgroundColor: GlobalColors.white,
  },
});
