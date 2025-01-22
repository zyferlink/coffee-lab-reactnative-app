import { ImageProps, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { BORDER_RADIUS, COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';
import ImageBackdropInfo from '../components/ImageBackdropInfo';
import PaymentFooter from '../components/PaymentFooter';

const DetailScreen = ({ navigation, route }: any) => {
  const addToCart = useStore((state: any) => state.addToCart);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const selectedItem = useStore((state: any) =>
    route.params.type == "Coffee" ? state.coffeeList : state.beanList,
  )[route.params.index];

  const [fullDescription, setFullDescription] = useState(true);
  const [price, setPrice] = useState(selectedItem.prices[0])

  const backHandler = () => {
    navigation.pop();
  };

  const toggleFavorite = (favorite: boolean, id: string, type: string) => {
    favorite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
  };

  const addToCartHandler = (
    id: string,
    index: any,
    name: string,
    type: string,
    roasted: string,
    imageLinkSquare: ImageProps,
    specialIngredient: string,
    price:any,
  ) => {
    addToCart({
      id,
      index,
      name,
      type,
      roasted,
      imageLinkSquare,
      specialIngredient,
      prices: [{ ...price, quantity: 1 }],
    });
    calculateCartPrice();
    navigation.navigate("Tab", { screen: "Cart" });
  };  
  

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        {/* Background Image & Header */}
        <ImageBackdropInfo
          id={selectedItem.id}
          name={selectedItem.name}
          type={selectedItem.type}
          ingredients={selectedItem.ingredients}
          specialIngredients={selectedItem.special_ingredient}
          averageRating={selectedItem.average_rating}
          ratingCount={selectedItem.ratings_count}
          roasted={selectedItem.roasted}
          imageLinkPortrait={selectedItem.imagelink_portrait}
          favorite={selectedItem.favorite}
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
                      ? COLORS.primaryOrange : COLORS.primaryLightGrey
                  }]}>
                  <Text
                    style={[styles.sizeText,
                    {
                      fontSize:
                        selectedItem.type == "Bean"
                          ? FONT_SIZE.size14 : FONT_SIZE.size16,
                      color:
                        priceItem.size == price.size
                          ? COLORS.primaryOrange : COLORS.primaryWhite
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
          buttonPressHandler={() => {
            addToCartHandler(
              selectedItem.id,
              selectedItem.index,
              selectedItem.name,
              selectedItem.type,
              selectedItem.roasted,
              selectedItem.imagelink_square,
              selectedItem.special_ingredient,
              price,
            );
          }}
        />

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
    justifyContent: "space-between",
  },
  footerInfoArea: {
    padding: SPACING.space20,
  },
  infoTitle: {
    fontFamily: FONT_FAMILY.poppinsSemiBold,
    fontSize: FONT_SIZE.size18,
    color: COLORS.primaryWhite,
    marginBottom: SPACING.space10,
  },
  descriptionText: {
    fontFamily: FONT_FAMILY.poppinsRegular,
    fontSize: FONT_SIZE.size14,
    color: COLORS.primaryWhite,
    letterSpacing: 0.5,
    marginBottom: SPACING.space30,
  },
  sizeOuterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: SPACING.space10,
  },
  sizeBox: {
    flex: 1,
    height: 48,
    backgroundColor: COLORS.primaryDarkGrey,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BORDER_RADIUS.radius10,
    borderWidth: 2,
  },
  sizeText: {
    fontFamily: FONT_FAMILY.poppinsMedium,
  },
})

export default DetailScreen