import React, { useState } from 'react'
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { useStore } from '../../state/useStore';
import { iconSet, lottieAnimations } from '../../config/assets';
import { fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';
import { PAYMENT_OPTIONS } from '../../data/paymentOptions';
import { NAVIGATORS, SCREENS } from '../../config/screenNames';
import { BUTTON_TITLES, CURRENCY, PAYMENT_METHODS } from '../../config/specialTypes';
import GradientIconBG from '../../components/common/GradientIconBG';
import PaymentMethod from './components/PaymentMethod';
import PaymentFooter from '../../components/common/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../../components/common/CustomIcon';
import PopUpAnimation from '../../components/common/PopUpAnimation';

interface PaymentScreenProps {
  navigation: any;
  route: any;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ navigation, route }) => {

  const calculateCartPrice = useStore((state: any) =>
    state.calculateCartPrice
  );
  const addToOrderHistoryFromCart = useStore((state: any) =>
    state.addToOrderHistoryFromCart
  );

  const [paymentMode, setPaymentMode] = useState(PAYMENT_METHODS.CREDIT_CARD);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  const buttonPressHandler = () => {
    setShowSuccessAnimation(true);
    addToOrderHistoryFromCart(paymentMode);
    calculateCartPrice();
    setTimeout(() => {
      setShowSuccessAnimation(false);
      navigation.navigate(NAVIGATORS.TAB, { screen: SCREENS.HISTORY });
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary-black">
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />
      {/* Success Animation */}
      {showSuccessAnimation &&
        <PopUpAnimation
          style={{ flex: 1 }}
          source={lottieAnimations.successful}
        />
      }
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`flex-grow-1`}>
        {/* Header Content */}
        <View className="px-6 py-4 flex-row items-center justify-between">
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.pop()}>
            <GradientIconBG
              name={iconSet.left}
              color={colors.secondary.lightGrey}
              size={fontSizes.size16}
            />
          </TouchableOpacity>
          {/* Header Text */}
          <Text className="text-xl font-poppinsSemiBold text-primary-white">
            Payments
          </Text>
          <View className="w-9" />
        </View>
        {/* Payment Option Content */}
        <View className="p-4 space-y-4">
          {/* Credit Card View */}
          <TouchableOpacity
            onPress={() => setPaymentMode(PAYMENT_METHODS.CREDIT_CARD)}>
            <View
              className={`p-3 space-y-2 border border-2 rounded-3xl 
              ${paymentMode === PAYMENT_METHODS.CREDIT_CARD ? 'border-primary-orange' : 'border-primary-lightGrey'}`}>
              {/* Credit Card Title */}
              <Text className="text-sm font-poppinsSemiBold text-primary-white ml-2">
                Credit Card
              </Text>
              {/* Credit Card Background */}
              <View className="bg-primary-darkGrey rounded-2xl">
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[colors.primary.grey, colors.primary.black]}
                  className="rounded-2xl p-4 space-y-6">
                  <View className="flex-row justify-between items-center">
                    {/* Credit Card Chip Icon */}
                    <CustomIcon
                      name={iconSet.chip}
                      size={fontSizes.size20 * 2}
                      color={colors.primary.orange}
                    />
                    {/* Credit Card Type Icon */}
                    <CustomIcon
                      name={iconSet.visa}
                      size={fontSizes.size30 * 2}
                      color={colors.primary.white}
                    />
                  </View>
                  {/* Credit Card Number */}
                  <View
                    className="flex-row space-x-2 items-center">
                    <Text className="text-[22px] font-poppinsMedium text-primary-white tracking-[4]">
                      0101
                    </Text>
                    <Text className="text-[22px] font-poppinsMedium text-primary-white tracking-[4]">
                      0101
                    </Text>
                    <Text className="text-[22px] font-poppinsMedium text-primary-white tracking-[4]">
                      8855
                    </Text>
                    <Text className="text-[22px] font-poppinsMedium text-primary-white tracking-[4]">
                      3477
                    </Text>
                  </View>
                  {/* Credit Card Holder Info */}
                  <View className="flex-row justify-between items-center">
                    <View >
                      <Text className="text-xs font-poppinsRegular text-secondary-lightGrey mb-0.5">
                        Card Holder Name
                      </Text>
                      <Text className="text-lg font-poppinsMedium text-primary-white">
                        Shavinda Nova
                      </Text>
                    </View>
                    {/* Credit Card Expiry Info */}
                    <View className="items-end">
                      <Text className="text-xs font-poppinsRegular text-secondary-lightGrey mb-0.5">
                        Expiry Date
                      </Text>
                      <Text className="text-lg font-poppinsMedium text-primary-white">
                        01/30
                      </Text>
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </TouchableOpacity>
          {/* Payment Option List */}
          {PAYMENT_OPTIONS.map((option: any) => (
            <TouchableOpacity
              key={option.name}
              onPress={() => setPaymentMode(option.name)}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={option.name}
                icon={option.icon}
                isIcon={option.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {/* Payment Footer */}
      <PaymentFooter
        buttonTitle={BUTTON_TITLES.PAY_WITH(paymentMode)}
        price={{ price: route.params.amount, currency: CURRENCY.USD.symbol }}
        priceContainerStyle={"py-7"}
        buttonPressHandler={buttonPressHandler} />
    </SafeAreaView>
  );
};

export default PaymentScreen;