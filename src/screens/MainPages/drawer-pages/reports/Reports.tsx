import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MainContainerStyles } from "../../../../styles/MainContainers";
import { SafeAreaView } from "react-native-safe-area-context";
import MonthStatementCard from "../../../../components/Main/drawer/Reports/MonthStatementCard";
import HeaderIconToolBar from "../../../../components/Global/HeaderIconToolBar";

import { Caption, Title } from "react-native-paper";
import { GlobalColors } from "../../../../global/Colors/GlobalColors";

import Icons from "react-native-vector-icons/Feather";
import { ReportChart } from "../../../../components/Main/drawer/Reports/Chart";

const Reports = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleOnPress = () => {
    setModalVisible(!modalVisible);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={MainContainerStyles.safeArea}>
      <View style={MainContainerStyles.container}>
        <Text>Reports</Text>
        {/* <ReportChart/> */}
        <MonthStatementCard month="January" onPressHandler={handleOnPress} />
        <MonthStatementCard month="January" onPressHandler={handleOnPress} />
        <MonthStatementCard month="January" onPressHandler={handleOnPress} />

        <Modal
          style={MainContainerStyles.modal}
          animationType="fade"
          visible={modalVisible}
          transparent={false}
        >
          <HeaderIconToolBar
            title="Report Statement"
            onPressHandler={handleCloseModal}
          />

          <View style={[MainContainerStyles.container, { marginTop: 25 }]}>
            <View>
              <Image
                source={require("../../../../Assets/logo.png")}
                style={{ width: 90, height: 90, resizeMode: "contain" }}
              />
            </View>
            <View style={{ width: "80%", alignSelf: "flex-end" }}>
              <Title style={{ alignItems: "flex-end", textAlign: "right" }}>
                January
              </Title>
              <View
                style={{
                  borderTopColor: GlobalColors.grey1,
                  borderTopWidth: 0.4,
                  paddingTop: 5,
                  borderBottomColor: GlobalColors.grey1,
                  borderBottomWidth: 0.4,
                  paddingBottom: 5,
                }}
              >
                <Caption>Greek's Farm gates</Caption>
                <Caption>44 avenue Str, Andale</Caption>
                <Caption>Pretoria</Caption>
                <Caption>Gauteng</Caption>
                <Caption>98009</Caption>
              </View>
            </View>
            <View style={{ marginTop:15, paddingHorizontal:10, backgroundColor:GlobalColors.grey1 }}>
              <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between' }}>
                <Title>Date</Title>
                <Title>Item</Title>
                <Title>Cost</Title>
              </View>
              <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between' }}>
                <Caption>05 Jan</Caption>
                <Caption>Item 1</Caption>
                <Caption>340</Caption>
              </View>
              <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between' }}>
                <Caption>15 Jan</Caption>
                <Caption>Item 5</Caption>
                <Caption>840</Caption>
              </View>
            </View>

            <View style={{ flexDirection:'row', alignItems:'center',justifyContent:'space-between', marginTop:40 }}>
              <Title style={{ fontSize:18 }}>Total Amount Accumulated</Title>
              <Title style={{ fontSize:18 }}>R1340.00</Title>
            </View>

            <View style={{ flexDirection:'column', alignItems:'flex-start',justifyContent:'flex-start', marginTop:80 }}>
            <View style={{ flexDirection:'row',alignItems:'center' }}>
              <Image
                source={require("../../../../Assets/logo.png")}
                style={{ width: 40, height: 40, resizeMode: "contain" }}
              />
              <Title style={{ paddingHorizontal:10,fontSize:14 }}>Total Amount Accumulated</Title>
            </View>
              <Caption style={{ textAlign:'justify',fontSize:10 }}>Please contact us for any inconvenient circumstance or misunderstands of your statement. revtracking12@gmail.com|09818283873</Caption>
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
                onPress={handleCloseModal}
              >
                <Icons
                  name="share-2"
                  size={30}
                  color={GlobalColors.white}
                />
              </TouchableOpacity>
            </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Reports;

const styles = StyleSheet.create({});
