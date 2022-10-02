import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/AuthPages/login/Login';
import Register from '../screens/AuthPages/register/Register';
import Forgot from '../screens/AuthPages/forgot-password/Forgot';
import OTP from '../screens/AuthPages/OTP/OTP';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName='register' screenOptions={{ headerShown:false}}>
        <AuthStack.Screen name='register' component={Register}/>
        <AuthStack.Screen name='login' component={Login}/>
        <AuthStack.Screen name='forgot' component={Forgot}/>
        <AuthStack.Screen name='otp' component={OTP}/>
    </AuthStack.Navigator>
  )
}

export default AuthStackNavigation