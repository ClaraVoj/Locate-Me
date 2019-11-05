import React from 'react';
import { crateStackNavigation, createStackNavigator, createAppContainer } from 'react-navigation'
import Login from '../../LocateMe/LocateMe/Components/Login';
import Maps from '../Components/Maps';

const AppNavigator = createStackNavigator(
    {
      Login: Login,
      Maps: Maps
    },
    {
      initialRouteName: "Login"
    }
  );
  
  export default createAppContainer(AppNavigator);
  
  