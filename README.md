<h1 align="center" >  
CoffeeLab by Nova <br> 
♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴘʀᴏᴊᴇᴄᴛ ] ♨
</h1>


## Stage 09: Implement Custom Hook | useStore  
**Log:** January 22, 2025  

This stage focuses on building a custom `useStore` hook for centralized state management using Zustand, with actions for cart and favorites.  

<p align="center">  
· • —–—–—– ٠ ✦ ٠ —–—–—– • ·
</p>

---

## Step by Step Process

#### Task 1: Create `useStore`  
- Define the useStore custom hook to simplify state access and updates
- Path (./src/store/useStore.ts)  

#
#### Task 2: Implement Cart Actions  
- **File:** [cartActions.ts](./src/store/util/cartActions.ts)  
- Add functions for cart management:  
  - Add/remove items.  
  - Calculate total price.  

#
#### Task 3: Implement Favorite Actions  
- **File:** [favoriteActions.ts](./src/store/util/favoriteActions.ts)  
- Add functions for managing favorite items:  
  - Toggle favorite status.  

#
#### Task 4: Integrate Cart and Favorite Actions into `useStore`  
- **File:** [useStore.ts](./src/store/useStore.ts)  
- Enhance the useStore hook by incorporating the cart and favorite action logic.
- Features to implement:
  - addToCart, removeFromCart, calculateTotalPrice from cartActions.
  - toggleFavorite from favoriteActions.
  - Ensure these actions update the app’s state via Zustand’s set function.

<br/>

#
#### Final Steps  

1. Ensure the app works correctly by cleaning and rebuilding the project:

   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

<br/>



<h2 align="center" > 
 —–— ◇ —–—  <br/>
ʟᴀᴛᴇꜱᴛ ꜱᴄʀᴇᴇɴꜱʜᴏᴛꜱ
</h2> 

<p align="center">  
<img src="./_archive/screenshots/screenshot-1-home.png" width=250>  
<img src="./_archive/screenshots/screenshot-2-items.png" width=250>
</p>

<p align="center">  
<img src="./_archive/screenshots/screenshot-3-search.png" width=250>  
<img src="./_archive/screenshots/screenshot-4-category.png" width=250>  
</p>  

<br/>

---

<h4 align="center" >  
See you in the next step for the development process! 🚀
</h4> 

---
