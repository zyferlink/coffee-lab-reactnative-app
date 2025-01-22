import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/useStore';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { COLORS, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PaymentFooter from '../components/PaymentFooter';
import CartItem from '../components/CartItem';

const CartScreen = ({ navigation, route }: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const cartList = useStore((state: any) => state.cartList);
  const cartPrice = useStore((state: any) => state.cartPrice);
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
    navigation.push("Payments");
  }

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.innerScrollView, { marginBottom: tabBarHeight }]}>
          <View
            style={styles.itemContainer}>
            {/* Header Bar */}
            <HeaderBar title={"Cart"} />
            {/* Cart Items */}
            {cartList.length == 0 ?
              (<EmptyListAnimation title={"Cart is Empty!"} />)
              :
              (<View style={styles.listItemContainer}>
                {cartList.map((item: any) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => { }}>
                    <CartItem
                      id={item.id}
                      index={item.index}
                      name={item.name}
                      type={item.type}
                      roasted={item.roasted}
                      imageLinkSquare={item.imageLinkSquare}
                      specialIngredient={item.specialIngredient}
                      prices={item.prices}
                      incrementQuantityHandler={() => { }}
                      decrementQuantityHandler={() => { }}
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
    backgroundColor: COLORS.primaryBlack,
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

export default CartScreen