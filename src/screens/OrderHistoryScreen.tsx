import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../state/useStore';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDER_RADIUS, COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PopUpAnimation from '../components/PopUpAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';
import { lottieAnimations } from '../config/assets';

const OrderHistoryScreen = ({ navigation }: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const orderHistoryList = useStore((state: any) => state.orderHistoryList);

  const [showAnimation, setShowAnimation] = useState(false)

  const navigationHandler = ({ index, id, type }: any) => {
    navigation.push("Details", { index, id, type });
  }

  const downloadActionHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  }

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
      {/* Success Animation */}
      {showAnimation ?
        <PopUpAnimation
          style={styles.lottieAnimation}
          source={lottieAnimations.download}
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
                    navigationHandler={navigationHandler}
                    orderDate={orderItem.orderDate}
                    orderPrice={orderItem.cartListPrice}
                    orderItemList={orderItem.cartList}
                  />
                ))}
              </View>
              )}
          </View>
          {orderHistoryList.length > 0 ?
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={() => { downloadActionHandler(); }}>
              <Text style={styles.downloadButtonText}>
                Download
              </Text>
            </TouchableOpacity>
            :
            <></>
          }
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
  downloadButton: {
    height: 64,
    borderRadius: BORDER_RADIUS.radius20,
    margin: SPACING.space20,
    backgroundColor: COLORS.primaryOrange,
    alignItems: "center",
    justifyContent: "center",
  },
  downloadButtonText: {
    fontFamily: FONT_FAMILY.poppinsSemiBold,
    fontSize: FONT_SIZE.size18,
    color: COLORS.primaryWhite,
  },
})

export default OrderHistoryScreen;