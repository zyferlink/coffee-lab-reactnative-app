import React from 'react';
import { StatusBar, TouchableOpacity, View, FlatList } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { useCartViewModel } from './CartViewModel';
import { CartItem } from '../../types/common/cartItem';
import { SCREENS } from '../../config/screenNames';
import { BUTTON_TITLES, CURRENCY } from '../../config/specialTypes';
import { MESSAGES } from '../../config/messages';
import { colors } from '../../config/colors';
import HeaderBar from '../../components/common/HeaderBar';
import EmptyListAnimation from '../../components/common/EmptyListAnimation';
import PaymentFooter from '../../components/common/PaymentFooter';
import CartItemView from './components/CartItemView';

interface CartScreenProps {
  navigation: any;
  route: any;
}

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const { cartList, cartPrice,
    handleIncrementQuantity, handleDecrementQuantity,
  } = useCartViewModel();

  const handleButtonPress = () => {
    navigation.push(SCREENS.PAYMENT, { amount: cartPrice });
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View className="px-5 py-2">
      <TouchableOpacity
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
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-primary-black">
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />

      <FlatList
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={null} // No need to render items
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`flex-grow pb-6`}
        ListHeaderComponent={
          <>
            {/* Header Bar */}
            <HeaderBar title={SCREENS.CART} />

            {/* Cart Items */}
            {cartList.length === 0 ? (
              <EmptyListAnimation title={MESSAGES.DEFAULTS.CART_IS_EMPTY} />
            ) : (
              <FlatList
                data={cartList}
                keyExtractor={(item) => item.id}
                contentContainerStyle={tw`gap-5 px-5 py-5`}
                renderItem={(item) => renderCartItem(item)}
              />
            )}
          </>
        }
      />

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

    </SafeAreaView>
  );
};

export default CartScreen;