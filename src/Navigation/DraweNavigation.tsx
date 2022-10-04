import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/MainPages/drawer-pages/dashboard/Dashboard';
import OrderHistory from '../screens/MainPages/drawer-pages/orderHistory/OrderHistory';
import ChatListsScreen from '../screens/MainPages/drawer-pages/chat-list/ChatListsScreen';
import Stock from '../screens/MainPages/drawer-pages/stock/Stock';
import Reports from '../screens/MainPages/drawer-pages/reports/Reports';
import CustomDrawer from './CustomDrawer';
import { GlobalColors } from '../global/Colors/GlobalColors';
import ChatStackNavigation from './ChatStackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props)=><CustomDrawer {...props}/>} 
    screenOptions={{ 
      headerStyle:{
        backgroundColor: GlobalColors.primaryColor,
      },
      headerTitleStyle:{
        color: GlobalColors.white,
      },
      headerTitleAlign:'center',
      headerTintColor: GlobalColors.white
     }}>
      <Drawer.Screen name='Dashboard' component={Dashboard}/>
      <Drawer.Screen name='orderHistory' component={OrderHistory}/>
      <Drawer.Screen name='messages' component={ChatStackNavigation}/>
      <Drawer.Screen name='stock' component={Stock}/>
      <Drawer.Screen name='reports' component={Reports}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation