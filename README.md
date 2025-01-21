<h1 align="center" >  
CoffeeLab by Nova <br> 
♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴘʀᴏᴊᴇᴄᴛ ] ♨
</h1>


## Stage 08: Implement Home Screen  
**Log:** January 21, 2025  

This stage focuses on implementing the `HomeScreen` and related components for the app.

<br/>

---

### Step byStep Process

#### Task 1: Initial Implementation of Home Screen  
- File: [HomeScreen.tsx](./src/screens/HomeScreen.tsx)  


#
#### Task 2: Implement Utility Functions  
- Create utility functions `getCategoriesFromList` and `getSortedCoffeeList`.  

#
#### Task 3: Implement `GradientBackgroundIcon` Component  
- File: [GradientBackgroundIcon.tsx](./src/components/GradientBackgroundIcon.tsx)  

#
#### Task 4: Implement `ProfilePicture` Component  
- File: [ProfilePicture.tsx](./src/components/ProfilePicture.tsx)  

#
#### Task 5: Reuse `ProfilePicture` Component  
- Use the `ProfilePicture` component in the `HeaderBar`.  

#
#### Task 6: Implement `HeaderBar` Component  
- File: [HeaderBar.tsx](./src/components/HeaderBar.tsx)  

#
#### Task 7: Apply `HeaderBar` to Home Screen  
- Integrate the `HeaderBar` component into the Home Screen.  
- File: [HomeScreen.tsx](./src/screens/HomeScreen.tsx)  

#
#### Task 8: Implement Search and Category Scroller Components  
- Add `SearchInput` and `CategoryScroller` inside the Home Screen.  
- File: [HomeScreen.tsx](./src/screens/HomeScreen.tsx)  

#
#### Task 9: Implement `BackgroundIcon` Component  
- File: [BackgroundIcon.tsx](./src/components/BackgroundIcon.tsx)  

#
#### Task 10: Implement `CoffeeCard` Component  
- Create a `CoffeeCard` component for horizontal views on the Home Screen.  
- File: [CoffeeCard.tsx](./src/components/CoffeeCard.tsx)  

#
#### Task 11: Apply `CoffeeCard` to Home Screen  
- Integrate the `CoffeeCard` component into the Home Screen layout.  
- File: [HomeScreen.tsx](./src/screens/HomeScreen.tsx)  

#
#### Task 12: Implement Search Functionalities and Basic Navigation  
- Add search functionalities and basic navigation to the Home Screen.  
- File: [HomeScreen.tsx](./src/screens/HomeScreen.tsx)  

#
### Final Steps  

1. Ensure the app works correctly by cleaning and rebuilding the project:

   ```bash
   cd android
   ./gradlew clean
   cd ..
   npx react-native run-android
   ```

---

### Screenshots  
<p align="center">  
<img src="./_archive/screenshots/screenshot-1-home.png" width=240>  
<img src="./_archive/screenshots/screenshot-2-items.png" width=240>  
<img src="./_archive/screenshots/screenshot-3-search.png" width=240>  
<img src="./_archive/screenshots/screenshot-4-category.png" width=240>  
</p>  

<br/>

---

**See you in the next step for the development process! 🚀**

---
