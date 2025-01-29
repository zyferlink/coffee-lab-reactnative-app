<h1 align="center" >  
CoffeeLab by Nova <br> 
♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴘʀᴏᴊᴇᴄᴛ ] ♨
</h1>


## Integrate NativeWind

**Log:** January 29, 2025  
NativeWind integration provides a seamless way to use TailwindCSS in React Native applications. This guide walks through the steps to install, configure, and use NativeWind effectively.

<p align="center">  
· • —–—–—– ٠ ✦ ٠ —–—–—– • ·
</p>

---


## Step-by-Step Process

### 1. Install NativeWind and TailwindCSS
Install the required packages:

```bash
npm install nativewind@2.0.11
npm install --save-dev tailwindcss@3.3.2
```

---

### 2. Setup Tailwind CSS
Run the following command to initialize TailwindCSS configuration:

```bash
npx tailwindcss init
```

Update the `content` array in your `tailwind.config.js` to include the paths to all your component files:

```js
// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom-folder>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### 3. Add the Babel Plugin
Update your Babel configuration to include the NativeWind plugin:

```js
// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ["nativewind/babel"],
};
```

---

### 4. TypeScript Support
For TypeScript projects, extend the React Native types using declaration merging. Create a new file named `nativewind-env.d.ts` and add the following directive:

```js
/// <reference types="nativewind/types" />
```

---

### 5. Install `twrnc`
Install `twrnc` to provide a simple and expressive API for TailwindCSS in React Native:

```bash
npm i twrnc
```

---

### 6. Configure Colors and Fonts
Customize your Tailwind theme with colors and fonts by updating your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#DC3535',
          orange: '#D17842',
          black: '#0C0F14',
          darkGrey: '#141921',
          grey: '#252A32',
          lightGrey: '#52555A',
          white: '#FFFFFF',
          blackTransparent: 'rgba(12,15,20,0.5)',
        },
        secondary: {
          red: '#E05A5A',
          orange: '#E0925D',
          black: '#15181D',
          darkGrey: '#21262E',
          grey: '#252A32',
          lightGrey: '#AEAEAE',
          white: '#F5F5F5',
          blackTransparent: 'rgba(0,0,0,0.7)',
        },
      },
      fontFamily: {
        poppinsBlack: ['Poppins-Black'],
        poppinsBold: ['Poppins-Bold'],
        poppinsExtraBold: ['Poppins-ExtraBold'],
        poppinsExtraLight: ['Poppins-ExtraLight'],
        poppinsLight: ['Poppins-Light'],
        poppinsMedium: ['Poppins-Medium'],
        poppinsRegular: ['Poppins-Regular'],
        poppinsSemiBold: ['Poppins-SemiBold'],
        poppinsThin: ['Poppins-Thin'],
      },
    },
  },
  plugins: [],
};
```

---

### 7. Refactor All Screens
Integrate NativeWind into every component.

- Ex: [HomeScreen.tsx](./src/screens/Home/HomeScreen.tsx)
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
ꜱᴄʀᴇᴇɴꜱʜᴏᴛꜱ 
</h2> 

<p align="center">  
<img src="./_archive/screenshots/screenshot-11.png" width=180>
<img src="./_archive/screenshots/screenshot-1-home.png" width=180>  
<img src="./_archive/screenshots/screenshot-2.jpg" width=180>
<img src="./_archive/screenshots/screenshot-3.jpg" width=180>  

</p>  

<p align="center">  
<img src="./_archive/screenshots/screenshot-4.jpg" width=180>  
<img src="./_archive/screenshots/screenshot-5.jpg" width=180>  
<img src="./_archive/screenshots/screenshot-7.png" width=180>
<img src="./_archive/screenshots/screenshot-8.jpg" width=180> 
</p>  


<br/>

---

<h4 align="center" >  
See you in the next step for the development process! 🚀
</h4> 

---