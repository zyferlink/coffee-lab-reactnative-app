import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useStore } from '../../state/useStore';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { colors } from '../../config/colors';
import { spacing } from '../../config/dimensions';
import { SCREENS } from '../../config/screenNames';
import { BUTTON_TITLES, CURRENCY } from '../../config/specialTypes';
import HeaderBar from '../../components/common/HeaderBar';
import EmptyListAnimation from '../../components/common/EmptyListAnimation';
import PaymentFooter from '../../components/common/PaymentFooter';
import CartItemView from './components/CartItemView';
import { MESSAGES } from '../../config/messages';

interface CartScreenProps {
  navigation: any;
  route: any;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const cartList = useStore((state: any) => state.cartList);
  const cartPrice = useStore((state: any) => state.cartPrice);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const incrementCartItemQuantity = useStore((state: any) => state.incrementCartItemQuantity);
  const decrementCartItemQuantity = useStore((state: any) => state.decrementCartItemQuantity);

  const handleButtonPress = () => {
    navigation.push(SCREENS.PAYMENT, { amount: cartPrice });
  };

  const handleIncrementQuantity = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const handleDecrementQuantity = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <View style={styles.innerScrollView}>
          {/* Header Bar */}
          <HeaderBar title={SCREENS.CART} />

          {/* Cart Items */}
          {cartList.length === 0 ? (
            <EmptyListAnimation title={MESSAGES.DEFAULTS.CART_IS_EMPTY} />
          ) : (
            <View style={styles.listItemContainer}>
              {cartList.map((item: any) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    navigation.push(SCREENS.DETAIL, {
                      index: item.index,
                      id: item.id,
                      type: item.type,
                    })
                  }
                >
                  <CartItemView
                    cartItem={item}
                    incrementQuantityHandler={handleIncrementQuantity}
                    decrementQuantityHandler={handleDecrementQuantity}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Payment Footer */}
      {cartList.length > 0 && (
        <View style={{ marginBottom: tabBarHeight }}>
          <PaymentFooter
            buttonTitle={BUTTON_TITLES.PAY}
            price={{ price: cartPrice, currency: CURRENCY.USD.symbol }}
            buttonPressHandler={handleButtonPress}
            priceContainerStyle={"py-2"}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.primary.black,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  innerScrollView: {
    flex: 1,
    paddingBottom: spacing.space48,
  },
  itemContainer: {
    flex: 1,
  },
  listItemContainer: {
    paddingHorizontal: spacing.space20,
    gap: spacing.space20,
  },
})

export default CartScreen;