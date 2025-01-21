<h1 align="center" >  
CoffeeLab by Nova <br> 
♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴘʀᴏᴊᴇᴄᴛ ] ♨
</h1>


## Stage 08: Implement Home Screen  
**Log:** January 21, 2025  

This stage focuses on creating the `HomeScreen` and its related components, utilities, and functionalities, such as headers, cards, search input, and navigation. By the end of this stage, the `HomeScreen` will be fully functional and visually engaging, setting the foundation for a smooth user experience.


<p align="center">  
· • —–—–—– ٠ ✦ ٠ —–—–—– • ·
</p>

---

## Step byStep Process

#### **Task 1: Initial Implementation of Home Screen**  
- This screen will serve as the main entry point for users, showcasing categories, coffee items, and a search bar.  
- File: [HomeScreen.tsx](./src/screens/HomeScreen.tsx)  


#
#### **Task 2: Implement Utility Functions**  
- Create utility functions `getCategoriesFromList` and `getSortedCoffeeList`.  
- **`getCategoriesFromList`**: Extracts coffee categories from the data source.  
- **`getSortedCoffeeList`**: Sorts the coffee list based on user preferences or specific parameters like popularity or price.  

#
#### **Task 3: Implement `GradientBackgroundIcon` Component**  
- Create a reusable component to display icons with gradient backgrounds.  
- File: [GradientBackgroundIcon.tsx](./src/components/GradientBackgroundIcon.tsx)  

#

#### **Task 4: Implement `ProfilePicture` Component**  
- Add a component to display the user’s profile picture in the header bar. 
- File: [ProfilePicture.tsx](./src/components/ProfilePicture.tsx)  

#
#### **Task 5: Reuse `ProfilePicture` Component in `HeaderBar`**  
- Utilize the `ProfilePicture` component as part of the `HeaderBar` for consistency and modularity.  

#
#### **Task 6: Implement `HeaderBar` Component**  
- Design and implement a customizable header bar for the Home Screen.  
- Include:  
  - The `ProfilePicture` for user personalization.  
  - A `GradientBackgroundIcon` for key actions.    
- File: [HeaderBar.tsx](./src/components/HeaderBar.tsx)  

#
#### **Task 7: Apply `HeaderBar` to Home Screen**  
- Integrate the `HeaderBar` component into the `HomeScreen`.  
- Ensure the header adapts to the screen design and functions as intended.  


#
#### **Task 8: Implement Search and Category Scroller Components**  
- Add a `SearchInput` field for users to search coffee items by name.  
- Create a `CategoryScroller` to display coffee categories horizontally, allowing users to filter coffee items by category.  

#
#### **Task 9: Implement `BackgroundIcon` Component**  
- Add a reusable component to display icons with subtle background effects.
- File: [BackgroundIcon.tsx](./src/components/BackgroundIcon.tsx)   

#
#### **Task 10: Implement `CoffeeCard` Component**  
- Create a component to showcase individual coffee items, displaying:  
  - Coffee image  
  - Name  
  - Price  
  - A subtle `BackgroundIcon` for additional style. 
- File: [CoffeeCard.tsx](./src/components/CoffeeCard.tsx)   

#
#### **Task 11: Apply `CoffeeCard` to Home Screen**  
- Integrate the `CoffeeCard` component into the Home Screen.  
- File: [HomeScreen.tsx](./src/screens/HomeScreen.tsx)  

#
#### **Task 12: Implement Search Functionalities and Basic Navigation**  
- Enhance the `HomeScreen` with search functionalities:  
  - Filter the coffee list based on user input in the `SearchInput` field.  
  - Provide feedback if no results match the search.  
- Add basic navigation functionality:  
  - Navigate to detail pages when an item is clicked.  
  - Ensure smooth transitions between screens.  
 
- File: [HomeScreen.tsx](./src/screens/HomeScreen.tsx)  

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
ꜱᴄʀᴇᴇɴꜱʜᴏᴛꜱ 
</h2> 

<p align="center">  
<img src="./_archive/screenshots/screenshot-1-home.png" width=250>  
<img src="./_archive/screenshots/screenshot-2-items.png" width=250>  
<img src="./_archive/screenshots/screenshot-3-search.png" width=250>  
<img src="./_archive/screenshots/screenshot-4-category.png" width=250>  
</p>  

<br/>

---

<h3 align="center" >  
See you in the next step for the development process! 🚀
</h3> 

---
