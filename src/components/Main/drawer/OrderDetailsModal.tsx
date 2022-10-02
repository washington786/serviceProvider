import { StyleSheet, Text, View,Modal } from 'react-native'
import React from 'react'
import { Title } from 'react-native-paper'
import { GlobalColors } from '../../../global/Colors/GlobalColors'

interface Modals{
    modalVisible: boolean;
}
const OrderDetailsModal = (props:Modals) => {
  return (
    <Modal visible={props.modalVisible} style={styles.modalCon} animationType='fade' transparent={false}>
        <View>
            <Title>Hey There Modal!!!!</Title>
        </View>
    </Modal>
  )
}

export default OrderDetailsModal

const styles = StyleSheet.create({
    modalCon:{
        flex: 1,
        backgroundColor: GlobalColors.white,
    }
})