import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AddStoreAddress from '../screens/MainPages/add-store-address/AddStoreAddress';
import AddStorePaymentDetails from '../screens/MainPages/add-store-payment-details/AddStorePaymentDetails';
import AddStore from '../screens/MainPages/add-store/AddStore';

const StoreStack = createNativeStackNavigator();

const StoreStackNavigation = () => {
  return (
   <>
    <StoreStack.Navigator initialRouteName='addStore' screenOptions={{ headerShown:false }}>
        <StoreStack.Screen name={'addStore'} component={AddStore}/>
        <StoreStack.Screen name={'addStoreAddress'} component={AddStoreAddress}/>
        <StoreStack.Screen name={'addStorePayment'} component={AddStorePaymentDetails}/>
    </StoreStack.Navigator>
   </>
  )
}

export default StoreStackNavigation