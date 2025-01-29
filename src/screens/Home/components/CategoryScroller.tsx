import React from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

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
            contentContainerStyle={tw`px-5 mb-2 mt-2`}
        >
            {categories.map((category, index) => {
                const isActive = categoryIndex === index;

                return (
                    <View
                        key={index.toString()}
                        className="px-2.5">
                        <TouchableOpacity
                            className="items-center"
                            onPress={() => onCategoryChange(index)}
                        >
                            <Text
                                className={`text-lg font-poppinsSemiBold 
                                ${isActive ? 'text-primary-orange' : 'text-primary-lightGrey'}`}
                            >
                                {category}
                            </Text>
                            {isActive && <View className="h-1 w-4 rounded-lg bg-primary-orange mt-1" />}
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
};

export default CategoryScroller;
