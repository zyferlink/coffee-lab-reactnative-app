<h1 align="center" >  
Scalable React Native Architecture with TypeScript:   <br> 
♨ Modular Domain Architecture ♨
</h1>

This document explores a scalable and maintainable folder structure for React Native projects using TypeScript. It highlights the advantages of this architecture, provides guidelines for building efficient apps, and compares it with alternative solutions to help developers make informed decisions for optimal app scalability and performance.

---

## Recommended Folder Structure

Here’s the recommended folder structure:

```plainText
root
├── 📂 src
│   ├── 📂 api               # Network-related code (API calls, clients)
│   │   ├── 📄 services.ts   // REST or GraphQL services
│   │   ├── 📄 interceptors.ts // Axios interceptors or request middleware
│   │   └── 📄 types.ts      // API response/request types
│   │
│   ├── 🗂️ assets            # Static assets (images, fonts, etc.)
│   │   ├── 📂 images        // Image assets
│   │   ├── 📂 fonts         // Font assets
│   │   ├── 📂 icons         // Icon assets
│   │   └── 📂 lottie        // Lottie animations
│   │
│   ├── 📂 components        # Reusable UI components
│   │   ├── 📂 common        // Shared components like buttons, headers, etc.
│   │   ├── 📂 layout        // Layout-specific components
│   │   └── 📂 specific      // Non-reusable or screen-specific components
│   │       ├── 📄 CustomCard.tsx
│   │       └── 📄 CustomCard.styles.ts
│   │
│   ├── 📂 config            # App configuration (themes, constants)
│   │   ├── 📄 assets.ts     // Assets configuration
│   │   ├── 📄 colors.ts     // Colors configuration
│   │   ├── 📄 constants.ts  // App constants
│   │   ├── 📄 fonts.ts      // Fonts configuration
│   │   ├── 📄 dimensions.ts // Dimens configuration
│   │   ├── 📄 apiConfig.ts  // API configuration (base URLs, keys)
│   │   └── 📄 env.ts        // Environment variables
│   │
│   ├── 📂 data               # Data (mock, local)
│   │   ├── 📄 mockData.json    // Mock data for testing
│   │   └── 📄 localData.ts     // Static data for dropdowns, etc.
│   │
│   ├── 📂 hooks             # Custom React hooks
│   │   ├── 📄 useCustomHook.ts
│   │   ├── 📄 useAuth.ts
│   │   └── 📄 useTheme.ts
│   │
│   ├── 📂 navigation        # Navigation setup 
│   │   ├── 📄 TabNavigator.tsx       // Bottom Tab Navigator setup
│   │   ├── 📄 RootStackNavigator.tsx // Stack Navigator setup
│   │   └── 📄 routes.ts               // Navigation screen name constants
│   │
│   ├── 📂 screens           # Screen-specific logic and views
│   │   ├── 📂 Home
│   │   │   ├── 📄 HomeScreen.tsx
│   │   │   ├── 📄 HomeViewModel.ts
│   │   │   ├── 📄 Home.styles.ts
│   │   │   └── 📂 components # Screen-specific components
│   │   ├── 📂 Profile
│   │   │   ├── 📄 ProfileScreen.tsx
│   │   │   ├── 📄 ProfileViewModel.ts
│   │   │   ├── 📄 Profile.styles.ts
│   │   │   └── 📂 components
│   │   └── 📂 Splash
│   │       ├── 📄 SplashScreen.tsx
│   │       ├── 📄 SplashViewModel.ts
│   │       ├── 📄 Splash.styles.ts
│   │       └── 📂 components
│   │
│   ├── 📂 state             # App state management (Redux, Zustand, MobX, etc.)
│   │   ├── 📂 slices        // Reducers or slices
│   │   ├── 📄 store.ts      // Redux store or equivalent
│   │   ├── 📄 selectors.ts  // State selectors
│   │   └── 📄 types.ts      // State-related type definitions
│   │
│   ├── 📂 styles            # Global styling or shared styles
│   │   ├── 📄 typography.ts
│   │   ├── 📄 spacing.ts
│   │   └── 📄 global.ts     // Global style configuration
│   │
│   ├── 📂 types             # Shared types and interfaces
│   │   ├── 📄 common.ts     // Commonly used interfaces and types
│   │   └── 📄 theme.ts      // Theme-related types
│   │
│   └── 📂 utils             # Utility functions or helpers
│       ├── 📄 dateUtils.ts
│       ├── 📄 validation.ts
│       └── 📄 logger.ts     // Logging utilities
│   
├── 📄 .env                  // Environment variables
├── 📄 App.tsx               // Entry point for the app
├── 📄 tsconfig.json         // TypeScript configuration
├── 📄 index.ts  
├── 📄 package.json
├── 📄 babel.config.js
└── 📄 README.md

```

<br/>

## Key Components of this Architecture


### `api`:
Contains all network-related logic like API calls, services (REST or GraphQL), interceptors, and type definitions related to API responses/requests. It isolates the network layer, making it easier to manage and test.

#
### `assets`:
This folder holds static assets like images, fonts, and icons used throughout the app. It helps in organizing and managing resources needed for UI rendering.

#
### `components`:
Reusable UI components are stored here. The directory is divided into:
- `common`: Shared components (buttons, headers, etc.).
- `layout`: Layout-specific components (e.g., grid systems, page wrappers).
- `specific`: Screen-specific or non-reusable components (e.g., custom cards).

#
### `config`:
Configuration files, such as app themes, API configurations, and environment variables, are stored here. It helps centralize configuration management for better maintainability.

#
### `hooks`:
Contains custom React hooks, which can include logic such as authentication (`useAuth`), theme management (`useTheme`), or other reusable hooks.

#
### `navigation`:
All navigation-related logic resides here. It contains the navigation setup (e.g., `AppNavigator.tsx`) and type definitions related to navigation (useful for TypeScript to handle navigation params).

#
### `screens`:
Organizes screens (views) by feature or domain, e.g., Home, Profile, and Splash. Each screen has:
- A screen component (e.g., `HomeScreen.tsx`).
- A ViewModel (e.g., `HomeViewModel.ts`), which can be a controller or container for managing business logic and data for the screen.
- Styles specific to that screen and its components.

#
### `state`:
Manages the app's state. This folder could be used with any state management library like Redux, Zustand, or MobX.
- `slices` for Redux reducers or state slices.
- `store.ts` for setting up the state management store.
- `selectors.ts` for selecting or querying the state.
- `types.ts` for type definitions related to state.

#
### `styles`:
Contains global or shared styles, such as typography, spacing, and global style configurations (e.g., `global.ts`).

#
### `types`:
Shared types and interfaces for the entire app, including theme-related types and commonly used interfaces.

#
### `utils`:
Utility functions or helpers, such as date formatting (`dateUtils.ts`), validation logic (`validation.ts`), and logging utilities (`logger.ts`).

#
### `index.tsx`:
The entry point of the app that renders the root component and sets up the app’s main functionality.



<br/>

---

## Advantages of This Architecture

1. **Separation of Concerns**:
   - Clear distinction between API, screens, components, and utilities.

2. **Scalability**:
   - Easily extendable for larger apps with multiple screens and features.

3. **Reusability**:
   - Reusable components, hooks, and utilities reduce duplicate code.

4. **Type Safety**:
   - TypeScript ensures strong typing, reducing runtime errors and improving maintainability.

5. **Maintainability**:
   - Logical grouping of files and modular structure make it easy to maintain and update.

6. **Testing Support**:
   - Screen-specific logic (e.g., ViewModels) and reusable components are easier to test.

---

## Comparison with Other Architectures

### 1. **Flat Folder Structure**
 A minimal structure where all files are grouped under a single folder (e.g., `components`, `screens`).

#### Pros:
   - Simpler for small apps.
   - Easier for quick prototyping.

#### Cons:
   - Becomes messy as the app grows.
   - Difficult to scale or maintain.

#
### 2. **Feature-Based Structure**
Each feature has its own folder containing components, hooks, and other logic.

```
root
├── src
│   ├── features
│   │   ├── Home
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── HomeViewModel.ts
│   │   │   └── components
│   │   ├── Profile
│   │   │   ├── ProfileScreen.tsx
│   │   │   ├── ProfileViewModel.ts
│   │   │   └── components
│   │   └── Splash
├── App.tsx
└── package.json
```

#### Pros:
   - Keeps all related code for a feature in one place.
   - Easier for teams working on separate features.

#### Cons:
   - Less reusable components.
   - Might duplicate logic across features.

#
### 3. **Clean Architecture (Layered Architecture)**
Divides the app into layers such as `data`, `domain`, and `presentation`.

```
root
├── src
│   ├── data
│   │   ├── api
│   │   ├── repositories
│   ├── domain
│   │   ├── models
│   │   ├── usecases
│   ├── presentation
│   │   ├── screens
│   │   ├── components
│   │   └── navigation
│   ├── utils
└── App.tsx
```

#### Pros:
   - Clear separation of business logic, data, and presentation.
   - Highly testable and scalable.

#### Cons:
   - More complex to set up.
   - Requires strict adherence to principles to avoid mixing layers.

---

## Why Use the Recommended Structure?

The recommended structure strikes a balance between **simplicity**, **scalability**, and **maintainability**. It avoids the complexity of Clean Architecture while offering better organization than a flat or feature-based structure. For most React Native projects, especially when using TypeScript, this structure is a practical choice.

---

Feel free to adapt this structure based on your project’s needs or team preferences.

