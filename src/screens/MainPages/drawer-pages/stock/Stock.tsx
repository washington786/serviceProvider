import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainContainerStyles } from "../../../../styles/MainContainers";
import { useNavigation } from "@react-navigation/native";
import { GlobalColors } from "../../../../global/Colors/GlobalColors";

import Icons from "react-native-vector-icons/Feather";
import HeaderIconToolBar from "../../../../components/Global/HeaderIconToolBar";
import StockCard from "../../../../components/Main/drawer/Stock/StockCard";
import { StockData } from "../../../../data/StockData";
import ImageCard from "../../../../components/Main/store/ImageCard";
import { Caption } from "react-native-paper";
import InputStore from "../../../../components/Main/store/Input";
import TextArea from "../../../../components/Main/store/TextArea";
import ButtonComponent from "../../../../components/Button/ButtonComponent";

import MultiSelectCategory from "../../../../components/Global/MultiSelect";
import SelectedCategoryCard from "../../../../components/Global/SelectedCategoryCard";
import { ScrollView } from "react-native-gesture-handler";

const Stock = () => {
  const [selected, setSelected] = React.useState();

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = React.useState(false);

  const [updateModalVisible, setUpdateModalVisible] = React.useState(false);

  const handleOpenAddProduct = () => {
    setModalVisible(!modalVisible);
  };

  const handleCloseModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleUpdateCloseModal = () => {
    setUpdateModalVisible(!updateModalVisible);
  };

  React.useEffect(() => {
    navigation.setOptions({
      title: "Stock Status",
      headerRight: () => (
        <TouchableOpacity style={{}} onPress={handleOpenAddProduct}>
          <Icons
            name="plus-square"
            size={25}
            color={GlobalColors.white}
            style={{ paddingRight: 10 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const onSubmitHandler = () => {
    setModalVisible(false);
  };

  const onSubmitUpdateHandler = () => {
    setUpdateModalVisible(false);
  };

  onselectionchange = (selectedItem) => {
    setSelected(selected);
  };

  const handleStockPressed = () => {
    setUpdateModalVisible(!updateModalVisible)
  };

  return (
    <SafeAreaView style={MainContainerStyles.safeArea}>
      <View style={MainContainerStyles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={StockData}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={(item) => {
            return (
              <StockCard
                image={item.item.image}
                name={item.item.name}
                out={item.item.out}
                qty={item.item.qty}
                total={item.item.total}
                onClick={handleStockPressed}
              />
            );
          }}
        />

        <Modal
          style={MainContainerStyles.modal}
          animationType="fade"
          visible={modalVisible}
          transparent={false}
        >
          <HeaderIconToolBar
            title="Add Product"
            onPressHandler={handleCloseModal}
          />
          <View style={MainContainerStyles.container}>
            <ImageCard customStyle={styles.imgCard} />
            <View style={styles.inputsCon}>
              
              <SelectedCategoryCard />

              <InputStore
                placeholder="Product Name"
                keyboardTypes="default"
                inputStyle
              />

              <InputStore
                placeholder="R0.00"
                keyboardTypes="number-pad"
                inputStyle
              />

              <InputStore
                placeholder="Item Quantity"
                keyboardTypes="number-pad"
                inputStyle
              />

              <TextArea
                customStyle={styles.textArea}
                numberOfLines={2}
                placeholder="Description"
              />
            </View>

            <ButtonComponent
              title="add product"
              btnCustomStyle={styles.btn}
              onPressHandler={onSubmitHandler}
            />
          </View>
        </Modal>

        <Modal
          style={MainContainerStyles.modal}
          animationType="fade"
          visible={updateModalVisible}
          transparent={false}
        >
          <HeaderIconToolBar
            title="Update Product"
            onPressHandler={handleUpdateCloseModal}
          />
          <View style={MainContainerStyles.container}>
            <ImageCard customStyle={styles.imgCard} />
            <View style={styles.inputsCon}>
              
              <SelectedCategoryCard />

              <InputStore
                placeholder="Product Name"
                keyboardTypes="default"
                inputStyle
                textConfig={
                  {
                    value:'Bananas'
                  }
                }
              />

              <InputStore
                placeholder="R0.00"
                keyboardTypes="number-pad"
                inputStyle
                textConfig={
                  {
                    value:'R190.00'
                  }
                }
              />

              <InputStore
                placeholder="Item Quantity"
                keyboardTypes="number-pad"
                inputStyle
                textConfig={
                  {
                    value:'45'
                  }
                }
              />

              <TextArea
                customStyle={styles.textArea}
                numberOfLines={2}
                placeholder="Description"
                textConfig={
                  {
                    value:'a box of bananas, contains 50 bananas in total, 5kg box.'
                  }
                }
              />
            </View>

            <ButtonComponent
              title="update product"
              btnCustomStyle={styles.btn}
              onPressHandler={onSubmitUpdateHandler}
            />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Stock;

const styles = StyleSheet.create({
  imgCard: {
    height: "100%",
    minHeight: 230,
    maxHeight: 230,
  },
  inputsCon: {
    marginTop: 50,
  },
  textArea: {
    minHeight: 70,
  },
  btn: {
    marginVertical: 10,
  },
});
