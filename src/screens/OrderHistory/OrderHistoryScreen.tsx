import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../../state/useStore';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import HeaderBar from '../../components/common/HeaderBar';
import EmptyListAnimation from '../../components/common/EmptyListAnimation';
import PopUpAnimation from '../../components/common/PopUpAnimation';
import OrderHistoryCard from './components/OrderHistoryCard';
import { lottieAnimations } from '../../config/assets';
import { fonts, fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';
import { borderRadius, spacing } from '../../config/dimensions';
import { SCREENS } from '../../config/screenNames';
import { CONSTANTS } from '../../config/constants';
import { MESSAGES } from '../../config/messages';

const OrderHistoryScreen = ({ navigation }: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const orderHistoryList = useStore((state: any) => state.orderHistoryList);

  const [showAnimation, setShowAnimation] = useState(false)

  const navigationHandler = ({ index, id, type }: any) => {
    navigation.push(SCREENS.DETAIL, { index, id, type });
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
      <StatusBar backgroundColor={colors.primary.black} />
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
            <HeaderBar title={CONSTANTS.TITLES.ORDER_HISTORY} />
            {/* Order History Items */}
            {orderHistoryList.length == 0 ?
              (<EmptyListAnimation title={MESSAGES.DEFAULTS.NO_ORDER_HISTORY} />)
              :
              (<View style={styles.listItemContainer}>
                {orderHistoryList.map((orderItem: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    orderItem={orderItem}
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
    backgroundColor: colors.primary.black,
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
    paddingHorizontal: spacing.space20,
    gap: spacing.space20,
  },
  downloadButton: {
    height: 64,
    borderRadius: borderRadius.radius20,
    margin: spacing.space20,
    backgroundColor: colors.primary.orange,
    alignItems: "center",
    justifyContent: "center",
  },
  downloadButtonText: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: fontSizes.size18,
    color: colors.primary.white,
  },
})

export default OrderHistoryScreen;