import { ImageProps } from "react-native";

// - Product
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

// - Brew Item
export interface BrewItemPrice {
  size: string;
  price: string;
  currency: string;
  quantity: number;
}

export interface BrewItem extends Product {
  prices: BrewItemPrice[];
}
