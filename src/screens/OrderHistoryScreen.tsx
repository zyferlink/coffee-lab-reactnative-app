import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/useStore';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PopUpAnimation from '../components/PopUpAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';

const OrderHistoryScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();

  const orderHistoryList = useStore((state: any) => state.orderHistoryList);

  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
      {/* Success Animation */}
      {showSuccessAnimation ?
        <PopUpAnimation
          style={styles.lottieAnimation}
          source={require("../lottie/successful.json")}
        />
        : <></>}
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
            {/* Order History Items */}
            {orderHistoryList.length == 0 ?
              (<EmptyListAnimation title={"No Order History!"} />)
              :
              (<View style={styles.listItemContainer}>
                {orderHistoryList.map((orderItem: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={() => { }}
                    orderDate={orderItem.orderDate}
                    orderPrice={orderItem.cartListPrice}
                    orderItemList={orderItem.cartList}
                  />
                ))}
              </View>
              )}
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
  lottieAnimation: {
    height: 250,
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
  listItemContainer: {
    paddingHorizontal: SPACING.space20,
    gap: SPACING.space20,
  },
})

export default OrderHistoryScreen;