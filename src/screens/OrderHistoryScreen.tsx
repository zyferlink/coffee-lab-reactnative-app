import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/useStore';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';

const OrderHistoryScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();

  const orderHistoryList = useStore((state: any) => state.orderHistoryList);

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.innerScrollView,
          { marginBottom: tabBarHeight }]}>
          <View
            style={styles.itemContainer}>
            {/* Header Bar */}
            <HeaderBar title={"Order History"} />

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  innerScrollView: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
  },
})

export default OrderHistoryScreen;