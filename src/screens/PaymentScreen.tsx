import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { BORDER_RADIUS, COLORS, FONT_SIZE, SPACING } from '../theme/theme';
import GradientBackgroundIcon from '../components/GradientBackgroundIcon';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../components/CustomIcon';
import { useStore } from '../state/useStore';
import PopUpAnimation from '../components/PopUpAnimation';
import { images, lottieAnimations } from '../config/assets';
import { fonts } from '../config/fonts';

const paymentList = [
  {
    name: "Wallet",
    icon: "icon",
    isIcon: true,
  },
  {
    name: "Google Pay",
    icon: images.logoGooglePay,
    isIcon: false,
  },
  {
    name: "Apple Pay",
    icon: images.logoApplePay,
    isIcon: false,
  },
  {
    name: "Amazon Pay",
    icon: images.logoAmazonPay,
    isIcon: false,
  },
];

const PaymentScreen = ({ navigation, route }: any) => {

  const calculateCartPrice = useStore((state: any) =>
    state.calculateCartPrice
  );
  const addToOrderHistoryFromCart = useStore((state: any) =>
    state.addToOrderHistoryFromCart
  );

  const [paymentMode, setPaymentMode] = useState("Credit Card");
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  const buttonPressHandler = () => {
    setShowSuccessAnimation(true);
    addToOrderHistoryFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setShowSuccessAnimation(false);
      navigation.navigate("Tab", { screen: "History" });
    }, 2000);
  };

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
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
            <GradientBackgroundIcon
              name={"left"}
              color={COLORS.primaryLightGrey}
              size={FONT_SIZE.size16}
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
            onPress={() => setPaymentMode("Credit Card")}>
            <View
              style={[styles.paymentCardContainer, {
                borderColor:
                  paymentMode == "Credit Card" ?
                    COLORS.primaryOrange : COLORS.primaryGrey
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
                  colors={[COLORS.primaryGrey, COLORS.primaryBlack]}
                  style={styles.linearGradientCreditCard}>
                  <View style={styles.creditCardRow}>
                    {/* Credit Card Chip Icon */}
                    <CustomIcon
                      name={"chip"}
                      size={FONT_SIZE.size20 * 2}
                      color={COLORS.primaryOrange}
                    />
                    {/* Credit Card Type Icon */}
                    <CustomIcon
                      name={"visa"}
                      size={FONT_SIZE.size30 * 2}
                      color={COLORS.primaryWhite}
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
          {paymentList.map((option: any) => (
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
        buttonTitle={`Pay with ${paymentMode}`}
        price={{ price: route.params.amount, currency: "$" }}
        buttonPressHandler={buttonPressHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
  },
  lottieAnimation:{
    flex: 1,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  headerContainer: {
    paddingHorizontal: SPACING.space24,
    paddingVertical: SPACING.space15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: FONT_SIZE.size20,
    color: COLORS.primaryWhite,
  },
  emptyView: {
    width: SPACING.space36,
  },
  paymentOptionContainer: {
    padding: SPACING.space15,
    gap: SPACING.space15,
  },
  paymentCardContainer: {
    padding: SPACING.space10,
    gap: SPACING.space10,
    borderRadius: BORDER_RADIUS.radius15,
    borderWidth: 3,
  },
  creditCardTitle: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: FONT_SIZE.size14,
    color: COLORS.primaryWhite,
    marginLeft: SPACING.space10,
  },
  creditCardBackground: {
    backgroundColor: COLORS.primaryGrey,
    borderRadius: BORDER_RADIUS.radius25,
  },
  linearGradientCreditCard: {
    borderRadius: BORDER_RADIUS.radius20,
    gap: SPACING.space30,
    paddingHorizontal: SPACING.space15,
    paddingVertical: SPACING.space10,
  },
  creditCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  creditCardNumberContainer: {
    flexDirection: "row",
    gap: SPACING.space10,
    alignItems: "center",
  },
  creditCardNumber: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: FONT_SIZE.size20,
    color: COLORS.primaryWhite,
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
    fontSize: FONT_SIZE.size14,
    color: COLORS.secondaryLightGrey,
  },
  creditCardName: {
    fontFamily: fonts.poppins.medium,
    fontSize: FONT_SIZE.size18,
    color: COLORS.primaryWhite,
  },
})

export default PaymentScreen