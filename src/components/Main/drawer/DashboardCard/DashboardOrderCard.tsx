import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../../../global/Colors/GlobalColors";

import Icons from "react-native-vector-icons/Feather";
import { Caption, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Data {
  onClickMethod(): any;
  customerName: string;
  orderNo: string;
  orderStatus: string;
  ModeOfTransport: string;
}

const DashboardOrderCard = (props: Data) => {
  const date = new Date(Date.now());

  const hours = date.getHours();

  const minutes = date.getMinutes();

  return (
    <TouchableOpacity onPress={props.onClickMethod}>
      <View style={styles.con}>
        <View style={styles.iconCon}>
          <Icons name="user" size={30} color={GlobalColors.grey3} />
        </View>

        <View style={styles.contentCon}>
          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Caption>
              {hours}:{minutes}am
            </Caption>
          </View>

          <View>
            <Title>{props.customerName}</Title>
            <View style={styles.capAndIconCon}>
              <View style={styles.captionsCon}>
                <Caption>#{props.orderNo}</Caption>
                <Caption>{props.orderStatus}</Caption>
                <Caption>{props.ModeOfTransport}</Caption>
              </View>
              <View
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  position: "relative",
                }}
              >
                <Icons
                  name="chevron-right"
                  size={24}
                  color={GlobalColors.grey4}
                  style={{ position: "absolute", right: 0, bottom: 15 }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardOrderCard;

const styles = StyleSheet.create({
  con: {
    minHeight: 70,
    backgroundColor: GlobalColors.lowWhite,
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
    marginVertical: 10,
    zIndex:100
  },
  iconCon: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  contentCon: {
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 10,
  },
  captionsCon: {
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
  },
  capAndIconCon: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
