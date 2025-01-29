import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage, { AsyncStorageStatic } from '@react-native-async-storage/async-storage';

import { CartItem } from "../types/common/cartItem";
import COFFEE_COLLECTION from "../data/coffeeCollection";
import BEANS_COLLECTION from "../data/beansCollection";
import {
    addToFavoriteList, deleteFromFavoriteList
} from "./util/favoriteActions";
import {
    addToCart, addToOrderHistoryFromCart, calculateCartPrice,
    decrementCartItemQuantity, incrementCartItemQuantity
} from "./util/cartActions";


export const useStore = create(
    persist(
        (set, get) => ({
            coffeeList: COFFEE_COLLECTION,
            beanList: BEANS_COLLECTION,
            cartPrice: 0,
            favoriteList: [],
            cartList: [],
            orderHistoryList: [],
            addToCart: (cartItem: CartItem) =>
                set(produce((state) => addToCart(state, cartItem))),

            calculateCartPrice: () =>
                set(produce((state) => calculateCartPrice(state))),

            incrementCartItemQuantity: (id: string, size: string) =>
                set(produce((state) => incrementCartItemQuantity(state, id, size))),

            decrementCartItemQuantity: (id: string, size: string) =>
                set(produce((state) => decrementCartItemQuantity(state, id, size))),

            addToOrderHistoryFromCart: (paymentMethod: string) =>
                set(produce((state) => addToOrderHistoryFromCart(state, paymentMethod))),

            addToFavoriteList: (id: string, type: string) =>
                set(produce((state) => addToFavoriteList(state, type, id))),

            deleteFromFavoriteList: (id: string, type: string) =>
                set(produce((state) => deleteFromFavoriteList(state, type, id))),
        }),
        {
            name: "coffee-lab-app",
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);