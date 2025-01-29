import React, { useState } from 'react'
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import { useStore } from '../../state/useStore';
import { lottieAnimations } from '../../config/assets';
import { colors } from '../../config/colors';
import { SCREENS } from '../../config/screenNames';
import { CONSTANTS } from '../../config/constants';
import { MESSAGES } from '../../config/messages';
import HeaderBar from '../../components/common/HeaderBar';
import EmptyListAnimation from '../../components/common/EmptyListAnimation';
import PopUpAnimation from '../../components/common/PopUpAnimation';
import OrderHistoryCard from './components/OrderHistoryCard';

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
    <SafeAreaView className="flex-1 bg-primary-black">
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />
      {/* Success Animation */}
      {showAnimation ?
        <PopUpAnimation
          style={{ height: 250 }}
          source={lottieAnimations.download}
        />
        : <></>}
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`flex-grow-1`}>
        <View
          className="flex-1 justify-between pb-4"
          style={{ marginBottom: tabBarHeight }}>
          <View
            className="flex-1">
            {/* Header Bar */}
            <HeaderBar title={CONSTANTS.TITLES.ORDER_HISTORY} />
            {/* Order History Items */}
            {orderHistoryList.length == 0 ?
              (<EmptyListAnimation title={MESSAGES.DEFAULTS.NO_ORDER_HISTORY} />)
              :
              (<View className="px-7 gap-5">
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
          {orderHistoryList.length > 0 && (
            <TouchableOpacity
              className="h-16 rounded-full mt-5 mx-7 bg-primary-orange items-center justify-center"
              onPress={() => { downloadActionHandler(); }}>
              <Text className="font-poppinsSemiBold text-lg text-white">
                Download
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default OrderHistoryScreen;