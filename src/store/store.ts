import { create } from "zustand";
import { produce } from "immer";
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage, { AsyncStorageStatic } from '@react-native-async-storage/async-storage';

import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";

export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeansData,
            CartPrice: 0,
            FavoriteList: [],
            CartList: [],
            OrderHistoryList: [],
        }),
        {
            name: "coffee-lab-app",
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);