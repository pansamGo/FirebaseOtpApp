/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './components/LoginScreen';
import VerifyOtpScreen from './components/VerifyOtpScreen';
import ProfileScreen from './components/ProfileScreen';
import AppContext from './components/AppContext';


function App () {

  const [confirm, setConfirm] = useState(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState('');


  const setConfirmObject = (value) => {
    setConfirm(value);
  }

  const setPhoneNumber = (number) => {
    setUserPhoneNumber(number);
  }

  const userSettings = {
    confirmObj: confirm,
    phoneNumber: userPhoneNumber,
    setConfirmObject,
    setPhoneNumber,
  }

  const Stack = createNativeStackNavigator();

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} options={{headerShown: false}}/>
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
