import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import GradientIconBG from '../../components/common/GradientIconBG';
import PaymentMethod from './components/PaymentMethod';
import PaymentFooter from '../../components/common/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../../components/common/CustomIcon';
import { useStore } from '../../state/useStore';
import PopUpAnimation from '../../components/common/PopUpAnimation';
import { iconSet, lottieAnimations } from '../../config/assets';
import { fonts, fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';
import { borderRadius, spacing } from '../../config/dimensions';
import { PAYMENT_OPTIONS } from '../../data/paymentOptions';
import { NAVIGATORS, SCREENS } from '../../config/screenNames';
import { BUTTON_TITLES, CURRENCY, PAYMENT_METHODS } from '../../config/specialTypes';


const PaymentScreen = ({ navigation, route }: any) => {

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
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />
      {/* Success Animation */}
      {showSuccessAnimation ?
        <PopUpAnimation
        style={styles.lottieAnimation}
        source={lottieAnimations.successful}
        />
        : <></>}
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        {/* Header Content */}
        <View style={styles.headerContainer}>
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.pop()}>
            <GradientIconBG
              name={iconSet.left}
              color={colors.primary.lightGrey}
              size={fontSizes.size16}
            />
          </TouchableOpacity>
          {/* Header Text */}
          <Text style={styles.headerText}>
            Payments
          </Text>
          <View style={styles.emptyView} />
        </View>
        {/* Payment Option Content */}
        <View style={styles.paymentOptionContainer}>
          {/* Credit Card View */}
          <TouchableOpacity
            onPress={() => setPaymentMode(PAYMENT_METHODS.CREDIT_CARD)}>
            <View
              style={[styles.paymentCardContainer, {
                borderColor:
                  paymentMode == PAYMENT_METHODS.CREDIT_CARD ?
                  colors.primary.orange : colors.primary.grey
              }]}>
              {/* Credit Card Title */}
              <Text style={styles.creditCardTitle}>
                Credit Card
              </Text>
              {/* Credit Card Background */}
              <View style={styles.creditCardBackground}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={[colors.primary.grey, colors.primary.black]}
                  style={styles.linearGradientCreditCard}>
                  <View style={styles.creditCardRow}>
                    {/* Credit Card Chip Icon */}
                    <CustomIcon
                      name={iconSet.visa}
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
                    style={styles.creditCardNumberContainer}>
                    <Text style={styles.creditCardNumber}>
                      0101
                    </Text>
                    <Text style={styles.creditCardNumber}>
                      0101
                    </Text>
                    <Text style={styles.creditCardNumber}>
                      8855
                    </Text>
                    <Text style={styles.creditCardNumber}>
                      3477
                    </Text>
                  </View>
                  {/* Credit Card Holder Info */}
                  <View style={styles.creditCardRow}>
                    <View style={styles.creditCardNameContainer}>
                      <Text style={styles.creditCardNameTitle}>
                        Card Holder Name
                      </Text>
                      <Text style={styles.creditCardName}>
                        Shavinda Nova
                      </Text>
                    </View>
                    {/* Credit Card Expiry Info */}
                    <View style={styles.creditCardExpireContainer}>
                      <Text style={styles.creditCardNameTitle}>
                        Expiry Date
                      </Text>
                      <Text style={styles.creditCardName}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.primary.black,
  },
  lottieAnimation:{
    flex: 1,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  headerContainer: {
    paddingHorizontal: spacing.space24,
    paddingVertical: spacing.space16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: fontSizes.size20,
    color: colors.primary.white,
  },
  emptyView: {
    width: spacing.space36,
  },
  paymentOptionContainer: {
    padding: spacing.space16,
    gap: spacing.space16,
  },
  paymentCardContainer: {
    padding: spacing.space10,
    gap: spacing.space10,
    borderRadius: borderRadius.radius16,
    borderWidth: 3,
  },
  creditCardTitle: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: fontSizes.size14,
    color: colors.primary.white,
    marginLeft: spacing.space10,
  },
  creditCardBackground: {
    backgroundColor: colors.primary.grey,
    borderRadius: borderRadius.radius28,
  },
  linearGradientCreditCard: {
    borderRadius: borderRadius.radius20,
    gap: spacing.space30,
    paddingHorizontal: spacing.space16,
    paddingVertical: spacing.space10,
  },
  creditCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  creditCardNumberContainer: {
    flexDirection: "row",
    gap: spacing.space10,
    alignItems: "center",
  },
  creditCardNumber: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: fontSizes.size20,
    color: colors.primary.white,
    letterSpacing: 6,
  },
  creditCardNameContainer: {
    alignItems: "flex-start",
  },
  creditCardExpireContainer: {
    alignItems: "flex-end",
  },
  creditCardNameTitle: {
    fontFamily: fonts.poppins.regular,
    fontSize: fontSizes.size14,
    color: colors.secondary.lightGrey,
  },
  creditCardName: {
    fontFamily: fonts.poppins.medium,
    fontSize: fontSizes.size18,
    color: colors.primary.white,
  },
})

export default PaymentScreen