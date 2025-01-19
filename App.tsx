import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabNavigator from './src/navigators/TabNavigator'
import DetailScreen from './src/screens/DetailScreen'
import PaymentScreen from './src/screens/PaymentScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>

        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: "slide_from_bottom" }}>
        </Stack.Screen>

        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{ animation: "slide_from_bottom" }}>
        </Stack.Screen>

        <Stack.Screen
          name="Payments"
          component={PaymentScreen}
          options={{ animation: "slide_from_bottom" }}>
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
