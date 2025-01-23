import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';
import GradientBackgroundIcon from '../components/GradientBackgroundIcon';
import PaymentMethod from '../components/PaymentMethod';
import PaymentFooter from '../components/PaymentFooter';

const paymentList = [
  {
    name: "Wallet",
    icon: "icon",
    isIcon: true,
  },
  {
    name: "Google Pay",
    icon: require("../assets/app_images/gpay.png"),
    isIcon: false,
  },
  {
    name: "Apple Pay",
    icon: require("../assets/app_images/applepay.png"),
    isIcon: false,
  },
  {
    name: "Amazon Pay",
    icon: require("../assets/app_images/amazonpay.png"),
    isIcon: false,
  },
];

const PaymentScreen = ({ navigation, route }: any) => {

  const [paymentMode, setPaymentMode] = useState("Credit Card")

  const buttonPressHandler = () => {
  };

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
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
    fontFamily: FONT_FAMILY.poppinsSemiBold,
    fontSize: FONT_SIZE.size20,
    color: COLORS.primaryWhite,
  },
  emptyView: {
    width: SPACING.space36,
  },
  paymentOptionContainer: {
    padding: SPACING.space15,
    gap: SPACING.space15,
  }
})

export default PaymentScreen