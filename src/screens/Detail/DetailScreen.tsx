import React, { useState } from 'react';
import {
  ScrollView, StatusBar, Text, TouchableOpacity,
  TouchableWithoutFeedback, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { useStore } from '../../state/useStore';
import { colors } from '../../config/colors';
import { NAVIGATORS, SCREENS } from '../../config/screenNames';
import { BUTTON_TITLES, PRODUCT_TYPES } from '../../config/specialTypes';
import { CartItem } from '../../types/common/cartItem';
import { Product } from '../../types/common/product';
import ImageBackdropInfo from '../../components/common/ImageBackdropInfo';
import PaymentFooter from '../../components/common/PaymentFooter';

interface DetailScreenProps {
  navigation: any;
  route: any;
}

const DetailScreen: React.FC<DetailScreenProps> = ({ navigation, route }) => {
  const addToCart = useStore((state: any) => state.addToCart);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const selectedItem: Product = useStore((state: any) =>
    route.params.type == PRODUCT_TYPES.COFFEE ? state.coffeeList : state.beanList,
  )[route.params.index];

  const [fullDescription, setFullDescription] = useState(false);
  const [price, setPrice] = useState(selectedItem.prices[0])

  const backHandler = () => {
    navigation.pop();
  };

  const toggleFavorite = (id: string, type: string, isFavorite: boolean) => {
    isFavorite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
  };

  const addToCartHandler = (
    cartItem: CartItem,
  ) => {
    addToCart(cartItem);
    calculateCartPrice();
    navigation.navigate(NAVIGATORS.TAB, { screen: SCREENS.CART });
  };

  return (
    <SafeAreaView className="flex-1 bg-primary-black">
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`flex-grow justify-between`}>

        {/* Background Image & Header */}
        <ImageBackdropInfo
          product={selectedItem}
          toggleFavorite={toggleFavorite}
          enableBackHandler={true}
          backHandler={backHandler}
        />

        {/* Footer Area */}
        <View className="p-5">
          {/* Description Area */}
          <Text className="font-poppinsSemiBold text-lg text-primary-white mt-2 mb-2">
            Description
          </Text>
          {
            fullDescription ?
              (<TouchableWithoutFeedback
                onPress={() => {
                  setFullDescription(previousValue => !previousValue)
                }}>
                <Text className="font-poppinsRegular text-sm text-primary-white tracking-wide mb-6">
                  {selectedItem.description}
                </Text>
              </TouchableWithoutFeedback>
              )
              :
              (<TouchableWithoutFeedback
                onPress={() => {
                  setFullDescription(previousValue => !previousValue)
                }}>
                <View>
                  <Text
                    className="font-poppinsRegular text-sm text-primary-white tracking-wide mb-6"
                    numberOfLines={3}>
                    {selectedItem.description}
                  </Text>
                  <Text className="font-poppinsSemiBold text-lg text-primary-white -mt-6 mb-6">
                    ...
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              )
          }

          {/* Sizes Area Title */}
          <Text className="font-poppinsSemiBold text-lg text-white mb-3">
            Size
          </Text>

          {/* Sizes Area */}
          <View className="flex-row justify-between gap-3">
            {
              selectedItem.prices.map((priceItem: any) => (
                <TouchableOpacity
                  key={priceItem.size}
                  onPress={() => {
                    setPrice(priceItem)
                  }}
                  className={`flex-1 h-12 bg-primary-darkGrey items-center justify-center rounded-xl border-2 
                    ${priceItem.size == price.size ? 'border-primary-orange' : 'border-primary-lightGrey'}`
                  }>
                  <Text
                    className={`font-poppinsMedium text-primary-white 
                    ${priceItem.size == price.size ? 'text-primary-orange' : 'text-primary-white'} 
                    ${selectedItem.type == PRODUCT_TYPES.BEAN ? 'text-md' : 'text-lg'}`
                    }>
                    {priceItem.size}
                  </Text>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>
      </ScrollView>

      {/* Payment Footer */}
      <PaymentFooter
        price={price}
        buttonTitle={BUTTON_TITLES.ADD_TO_CART}
        priceContainerStyle={"pb-7 pt-2"}
        buttonPressHandler={() => {
          const cartItem: CartItem = {
            ...selectedItem,
            prices: [{ ...price, quantity: 1 }]
          };
          addToCartHandler(cartItem);
        }}
      />
    </SafeAreaView>
  )
}

export default DetailScreen;