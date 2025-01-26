import { ImageProps } from "react-native";

export interface ProductPrice {
    size: string;
    price: string;
    currency: string;
  }
  
  export interface Product {
    id: string;
    name: string;
    description: string;
    roasted: string;
    imageLinkSquare: ImageProps;  
    imageLinkPortrait: ImageProps;
    ingredients: string;
    specialIngredient: string;
    prices: ProductPrice[];
    averageRating: number;
    ratingsCount: string;
    isFavorite: boolean;
    type: 'Coffee' | 'Bean';
    index: number;
  }
  