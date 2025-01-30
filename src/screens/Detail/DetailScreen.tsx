import React from 'react';
import {
  ScrollView, StatusBar, Text, TouchableOpacity,
  TouchableWithoutFeedback, View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { colors } from '../../config/colors';
import { BUTTON_TITLES, PRODUCT_TYPES } from '../../config/specialTypes';
import ImageBackdropInfo from '../../components/common/ImageBackdropInfo';
import PaymentFooter from '../../components/common/PaymentFooter';
import DetailViewModel from './DetailViewModel';

interface DetailScreenProps {
  navigation: any;
  route: any;
}

const DetailScreen: React.FC<DetailScreenProps> = ({ navigation, route }) => {
  const viewModel = DetailViewModel(navigation, route);

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
          product={viewModel.selectedItem}
          toggleFavorite={viewModel.toggleFavorite}
          enableBackHandler={true}
          backHandler={viewModel.backHandler}
        />
        {/* Footer Area */}
        <View className="p-5">
          <Text className="font-poppinsSemiBold text-lg text-primary-white mt-2 mb-2">Description</Text>
          <TouchableWithoutFeedback onPress={viewModel.toggleDescription}>
            <View>
              <Text className="font-poppinsRegular text-sm text-primary-white tracking-wide mb-6"
                numberOfLines={viewModel.fullDescription ? undefined : 3}>
                {viewModel.selectedItem.description}
              </Text>
              {!viewModel.fullDescription && (
                <Text className="font-poppinsSemiBold text-lg text-primary-white -mt-6 mb-6">...</Text>
              )}
            </View>
          </TouchableWithoutFeedback>

          {/* Sizes Area Title */}
          <Text className="font-poppinsSemiBold text-lg text-white mb-3">
            Size
          </Text>

          {/* Sizes Area */}
          <View className="flex-row justify-between gap-3">

            {viewModel.selectedItem.prices.map((priceItem: any) => (
              <TouchableOpacity key={priceItem.size} onPress={() => viewModel.setPrice(priceItem)}
                className={`flex-1 h-12 bg-primary-darkGrey items-center justify-center rounded-xl border-2 
                  ${priceItem.size == viewModel.price.size ? 'border-primary-orange' : 'border-primary-lightGrey'}`}
              >
                <Text className={`font-poppinsMedium text-primary-white 
                  ${priceItem.size == viewModel.price.size ? 'text-primary-orange' : 'text-primary-white'} 
                  ${viewModel.selectedItem.type == PRODUCT_TYPES.BEAN ? 'text-md' : 'text-lg'}`}
                >
                  {priceItem.size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Payment Footer */}
      <PaymentFooter
        price={viewModel.price}
        buttonTitle={BUTTON_TITLES.ADD_TO_CART}
        priceContainerStyle={"pb-7 pt-2"}
        buttonPressHandler={viewModel.addToCartHandler}
      />
    </SafeAreaView>
  );
}

export default DetailScreen;
