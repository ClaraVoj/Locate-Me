import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login'
import Maps from './Components/Maps';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Maps: Maps
  },
  {
    initialRouteName: "Maps"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default function App() {
  return (
    <AppContainer/>
  );
}



