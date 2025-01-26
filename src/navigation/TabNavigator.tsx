import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';
import { colors } from '../config/colors';
import { iconSet } from '../config/assets';
import { SCREENS } from '../config/screenNames';
import CustomIcon from '../components/CustomIcon';

// Screens
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';


const Tab = createBottomTabNavigator();

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
                        overlayColor=""
                        blurAmount={15}
                        style={styles.blurViewStyles}
                    />
                ),
            }}
        >
            <Tab.Screen
                name={SCREENS.HOME}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabIcon(iconSet.home, focused),
                }}
            />
            <Tab.Screen
                name={SCREENS.CART}
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabIcon(iconSet.cart, focused),
                }}
            />
            <Tab.Screen
                name={SCREENS.FAVORITE}
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabIcon(iconSet.like, focused),
                }}
            />
            <Tab.Screen
                name={SCREENS.HISTORY}
                component={OrderHistoryScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabIcon(iconSet.bell, focused),
                }}
            />
        </Tab.Navigator>
    );
};

function getTabIcon(iconName: string, focused: boolean) {
    const ICON_SIZE = 25;
    return (
        <CustomIcon
            name={iconName}
            size={ICON_SIZE}
            color={focused ?
                colors.primary.orange : colors.primary.lightGrey
            }
        />
    );
}

const styles = StyleSheet.create({
    tabBarStyles: {
        height: 70,
        position: 'absolute',
        backgroundColor: colors.primary.blackTransparent,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
        paddingTop: 16,
    },
    blurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default TabNavigator;
