import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import CartScreen from '../screens/CartScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CustomIcon from '../components/CustomIcon'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'

const Tab = createBottomTabNavigator();

function getTabIcon(iconName: string, focused: boolean, size: number) {
    return (<CustomIcon
        name={iconName}
        size={size}
        color={focused ?
            COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
        }
    />);
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBarStyles,
                tabBarBackground: () => (
                    <BlurView
                        overlayColor=''
                        blurAmount={15}
                        style={styles.blurViewStyles}
                    />
                )
            }}>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabIcon("home", focused, 25),
                }}>
            </Tab.Screen>

            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabIcon("cart", focused, 25),
                }}>
            </Tab.Screen>

            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabIcon("like", focused, 25),
                }}>
            </Tab.Screen>

            <Tab.Screen
                name="History"
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabIcon("bell", focused, 25),
                }}>
            </Tab.Screen>

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyles: {
        height: 70,
        position: "absolute",
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
        paddingTop: 16,
    },
    blurViewStyles: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})

export default TabNavigator