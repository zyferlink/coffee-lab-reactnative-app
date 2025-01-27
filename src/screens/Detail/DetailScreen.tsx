import React, { useState } from 'react';
import {
  ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity,
  TouchableWithoutFeedback, View
} from 'react-native';
import { useStore } from '../../state/useStore';
import { fonts, fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';
import { borderRadius, spacing } from '../../config/dimensions';
import { NAVIGATORS, SCREENS } from '../../config/screenNames';
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
    route.params.type == "Coffee" ? state.coffeeList : state.beanList,
  )[route.params.index];

  const [fullDescription, setFullDescription] = useState(true);
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
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        {/* Background Image & Header */}
        <ImageBackdropInfo
          product={selectedItem}
          toggleFavorite={toggleFavorite}
          enableBackHandler={true}
          backHandler={backHandler}
        />
        {/* Footer Area */}
        <View style={styles.footerInfoArea}>
          {/* Description Area */}
          <Text style={styles.infoTitle}>
            Description
          </Text>
          {
            fullDescription ?
              (<TouchableWithoutFeedback
                onPress={() => {
                  setFullDescription(previousValue => !previousValue)
                }}>
                <Text style={styles.descriptionText}>
                  {selectedItem.description}
                </Text>
              </TouchableWithoutFeedback>
              )
              :
              (<TouchableWithoutFeedback
                onPress={() => {
                  setFullDescription(previousValue => !previousValue)
                }}>
                <Text style={styles.descriptionText} numberOfLines={3}>
                  {selectedItem.description}
                </Text>
              </TouchableWithoutFeedback>
              )
          }
          {/* Sizes Area */}
          <Text style={styles.infoTitle}>
            Size
          </Text>
          <View style={styles.sizeOuterContainer}>
            {
              selectedItem.prices.map((priceItem: any) => (
                <TouchableOpacity
                  key={priceItem.size}
                  onPress={() => {
                    setPrice(priceItem)
                  }}
                  style={[styles.sizeBox,
                  {
                    borderColor: priceItem.size == price.size
                      ? colors.primary.orange : colors.primary.lightGrey
                  }]}>
                  <Text
                    style={[styles.sizeText,
                    {
                      fontSize:
                        selectedItem.type == "Bean"
                          ? fontSizes.size14 : fontSizes.size16,
                      color:
                        priceItem.size == price.size
                          ? colors.primary.orange : colors.primary.white
                    }]}>
                    {priceItem.size}
                  </Text>
                </TouchableOpacity>
              ))
            }
          </View>
        </View>

        <PaymentFooter
          price={price}
          buttonTitle={"Add to Cart"}
          priceContainerStyle={{ paddingVertical: spacing.space20 }}
          buttonPressHandler={() => {
            const cartItem: CartItem = {
              ...selectedItem,
              prices: [{ ...price, quantity: 1 }]
            };
            addToCartHandler(cartItem);
          }}
        />
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
    justifyContent: "space-between",
  },
  footerInfoArea: {
    padding: spacing.space20,
  },
  infoTitle: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: fontSizes.size18,
    color: colors.primary.white,
    marginBottom: spacing.space10,
  },
  descriptionText: {
    fontFamily: fonts.poppins.regular,
    fontSize: fontSizes.size14,
    color: colors.primary.white,
    letterSpacing: 0.5,
    marginBottom: spacing.space30,
  },
  sizeOuterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.space10,
  },
  sizeBox: {
    flex: 1,
    height: 48,
    backgroundColor: colors.primary.darkGrey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius.radius10,
    borderWidth: 2,
  },
  sizeText: {
    fontFamily: fonts.poppins.medium,
  },
})

export default DetailScreen;