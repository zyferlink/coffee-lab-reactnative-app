import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../../config/colors';
import { borderRadius, spacing } from '../../../config/dimensions';
import { fonts, fontSizes } from '../../../config/fonts';

type CategoryScrollerProps = {
    categories: string[]; 
    categoryIndex: number;
    onCategoryChange: (index: number) => void;
};

const CategoryScroller: React.FC<CategoryScrollerProps> = ({
    categories,
    categoryIndex,
    onCategoryChange,
}) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScrollViewContentContainer}
        >
            {categories.map((category, index) => {
                const isActive = categoryIndex === index;

                return (
                    <View key={index.toString()} style={styles.categoryScrollViewContainer}>
                        <TouchableOpacity
                            onPress={() => onCategoryChange(index)}
                            style={styles.categoryScrollViewItem}
                        >
                            <Text
                                style={[
                                    styles.categoryText,
                                    isActive ? { color: colors.primary.orange } : {},
                                ]}
                            >
                                {category}
                            </Text>
                            {isActive && <View style={styles.activeCategory} />}
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    categoryScrollViewContentContainer: {
        paddingHorizontal: spacing.space20,
        marginBottom: spacing.space2,
        marginTop: spacing.space10,
    },
    categoryScrollViewContainer: {
        paddingHorizontal: spacing.space10,
    },
    categoryScrollViewItem: {
        alignItems: "center",
    },
    categoryText: {
        fontSize: fontSizes.size16,
        fontFamily: fonts.poppins.semiBold,
        color: colors.primary.lightGrey,
        marginBottom: spacing.space4,
    },
    activeCategory: {
        height: spacing.space4,
        width: spacing.space16,
        borderRadius: borderRadius.radius10,
        backgroundColor: colors.primary.orange,
    },
})

export default CategoryScroller;
