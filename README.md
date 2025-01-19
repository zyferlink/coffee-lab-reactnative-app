<h1 align="center" >  
CoffeeLab by Nova <br> 
♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴘʀᴏᴊᴇᴄᴛ ] ♨
</h1>


## Stage 07: Building Zustand Store  
**Log:** January 19, 2025  

In this stage, you'll set up the Zustand store for state management in your React Native app.

---

## Step-by-Step Process

#### Step 1: Create Store File

1. Inside `src/store/`, create a file named `store.ts`

---

#### Step 2: Implement the Store

1. Implement the store feature in `store.ts`:

   - [store.ts](./src/store/store.ts)

   **Code Implementation**:

   ```js
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
   ```

   **Highlights**:

   ### Imports:
   - **`zustand`**: A state management library for React and React Native. The `create` function is used to define a store that holds the app's state.
   - **`immer`**: A library for handling immutable state updates. It's imported here but not directly used in the code provided.
   - **`zustand/middleware`**: Provides middleware for state persistence. Specifically, **`persist`** is used to persist the state, and **`createJSONStorage`** allows using a custom storage mechanism (in this case, `AsyncStorage`).
   - **`AsyncStorage`**: A simple, asynchronous, persistent storage system for React Native. It's used to save the app's state between sessions.
   - **`CoffeeData` and `BeansData`**: Static data imported from local files that represent coffee and beans information. These serve as the initial values in the store.

   ### Store (`useStore`):
   This defines a state store using **`zustand`** with the following properties:
   - `CoffeeList` and `BeanList`: Initial data imported from **`CoffeeData`** and **`BeansData`** respectively.
   - `CartPrice`: Tracks the total price of items in the cart.
   - `FavoriteList`: Holds the user's favorite coffee items.
   - `CartList`: Stores the list of items currently in the user's cart.
   - `OrderHistoryList`: Keeps the list of past orders.

   ### Persistence:
   - The store is configured to persist its state using **`AsyncStorage`**, meaning that the data is saved across app sessions and restored when the app is restarted.
   - The persistence is handled by **`persist`** middleware with `AsyncStorage` as the storage engine.

---

### Final Steps

After setting up the store, ensure the app is functioning as expected by cleaning and rebuilding the project:

1. Run the following commands:

   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

---

### Screenshot : Latest 
<p align="center">  
<img src="./_archive/screenshots/screenshot-navigator.png" width=200>  
</p>

---

**See you in the next step for the development process! 🚀**

---