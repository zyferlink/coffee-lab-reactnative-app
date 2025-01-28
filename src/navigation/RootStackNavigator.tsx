import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { NAVIGATORS, SCREENS } from '../config/screenNames';

// Navigators
import TabNavigator from './TabNavigator';

// Screens
import DetailScreen from '../screens/Detail/DetailScreen';
import PaymentScreen from '../screens/Payment/PaymentScreen';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={NAVIGATORS.TAB}
          component={TabNavigator}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name={SCREENS.DETAIL}
          component={DetailScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
        <Stack.Screen
          name={SCREENS.PAYMENT}
          component={PaymentScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
