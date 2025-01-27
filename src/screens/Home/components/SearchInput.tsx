import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CustomIcon from '../../../components/common/CustomIcon';
import { fonts, fontSizes } from '../../../config/fonts';
import { colors } from '../../../config/colors';
import { borderRadius, spacing } from '../../../config/dimensions';
import { iconSet } from '../../../config/assets';
import { CONSTANTS } from '../../../config/constants';

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
    <View style={styles.inputContainer}>
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
          style={styles.inputIcon}
        />
      </TouchableOpacity>

      {/* Text Input */}
      <TextInput
        placeholder={CONSTANTS.PLACEHOLDER.FIND_YOUR_COFFEE}
        value={searchText}
        onChangeText={text => {
            setSearchText(text);
            onSearchCoffee(searchText);
          }}
        placeholderTextColor={colors.primary.lightGrey}
        style={styles.textInputContainer}
      />

      {/* Reset Icon */}
      {searchText.length > 0 && (
        <TouchableOpacity 
        onPress={() => onResetSearch()}>
          <CustomIcon
            name={iconSet.close}
            size={fontSizes.size16}
            color={colors.primary.lightGrey}
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
   inputContainer: {
     flexDirection: "row",
     marginHorizontal: spacing.space24,
     marginVertical: spacing.space16,
     borderRadius: borderRadius.radius20,
     backgroundColor: colors.primary.darkGrey,
     alignItems: "center",
   },
   inputIcon: {
    marginHorizontal: spacing.space20,
  },
    textInputContainer: {
      flex: 1,
      height: spacing.space60,
      fontFamily: fonts.poppins.medium,
      fontSize: fontSizes.size14,
      color: colors.primary.white,
    },
})

export default SearchInput;
