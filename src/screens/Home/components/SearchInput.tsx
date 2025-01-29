import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { fontSizes } from '../../../config/fonts';
import { colors } from '../../../config/colors';
import { iconSet } from '../../../config/assets';
import { CONSTANTS } from '../../../config/constants';
import CustomIcon from '../../../components/common/CustomIcon';

type SearchInputProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  onSearchCoffee: (text: string) => void;
  onResetSearch: () => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  searchText,
  setSearchText,
  onSearchCoffee,
  onResetSearch,
}) => {
  return (
    <View className="flex-row mx-6 my-4 rounded-3xl bg-primary-darkGrey items-center">
      {/* Search Icon */}
      <TouchableOpacity
        onPress={() => onSearchCoffee(searchText)}>
        <CustomIcon
          name={iconSet.search}
          size={fontSizes.size18}
          color={
            searchText.length > 0
              ? colors.primary.orange
              : colors.primary.lightGrey
          }
          className="mx-5"
        />
      </TouchableOpacity>

      {/* Text Input */}
      <TextInput
        className="flex-1 h-15 font-poppinsMedium text-base text-primary-white"
        placeholder={CONSTANTS.PLACEHOLDER.FIND_YOUR_COFFEE}
        value={searchText}
        onChangeText={text => {
          setSearchText(text);
          onSearchCoffee(searchText);
        }}
        placeholderTextColor={colors.primary.lightGrey}
      />

      {/* Reset Icon */}
      {searchText.length > 0 && (
        <TouchableOpacity
          onPress={() => onResetSearch()}>
          <CustomIcon
            name={iconSet.close}
            size={fontSizes.size16}
            color={colors.primary.lightGrey}
            className="mx-5"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
