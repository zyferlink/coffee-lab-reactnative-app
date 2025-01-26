import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStore } from '../../state/useStore';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import HeaderBar from '../../components/common/HeaderBar';
import EmptyListAnimation from '../../components/common/EmptyListAnimation';
import PaymentFooter from '../../components/common/PaymentFooter';
import CartItem from './components/CartItem';
import { colors } from '../../config/colors';
import { spacing } from '../../config/dimensions';
import { SCREENS } from '../../config/screenNames';

const CartScreen = ({ navigation, route }: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const cartList = useStore((state: any) => state.cartList);
  const cartPrice = useStore((state: any) => state.cartPrice);
  const calculateCartPrice = useStore(
    (state: any) => state.calculateCartPrice
  );
  const incrementCartItemQuantiy = useStore(
    (state: any) => state.incrementCartItemQuantiy
  );
  const decrementCartItemQuantiy = useStore(
    (state: any) => state.decrementCartItemQuantiy
  );
  const addToOrderHistoryFromCart = useStore(
    (state: any) => state.addToOrderHistoryFromCart
  );

  const buttonPressHandler = () => {
    navigation.push(SCREENS.PAYMENT, {amount: cartPrice});
  };

  const incrementItemQuantiyHandler = (id: string, size: string) => {
    incrementCartItemQuantiy(id, size);
    calculateCartPrice();
  };

  const decrementItemQuantiyHandler = (id: string, size: string) => {
    decrementCartItemQuantiy(id, size);
    calculateCartPrice();

  };

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.innerScrollView, { marginBottom: tabBarHeight }]}>
          <View
            style={styles.itemContainer}>
            {/* Header Bar */}
            <HeaderBar title={SCREENS.CART} />
            {/* Cart Items */}
            {cartList.length == 0 ?
              (<EmptyListAnimation title={"Cart is Empty!"} />)
              :
              (<View style={styles.listItemContainer}>
                {cartList.map((item: any) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      navigation.push(SCREENS.DETAIL,
                        {
                          index: item.index,
                          id: item.id,
                          type: item.type,
                        }
                      );
                    }}>
                    <CartItem
                      brewItem={item}
                      incrementQuantityHandler={incrementItemQuantiyHandler}
                      decrementQuantityHandler={decrementItemQuantiyHandler}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              )}
          </View>
          {
            cartList.length != 0 ?
              (
                <PaymentFooter
                  buttonTitle={"Pay"}
                  price={{ price: cartPrice, currency: "$" }}
                  buttonPressHandler={buttonPressHandler}
                />
              )
              :
              (<></>)
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
})

export default CartScreen