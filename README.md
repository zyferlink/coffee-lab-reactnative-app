<h1 align="center" >  
CoffeeLab by Nova <br> 
♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴘʀᴏᴊᴇᴄᴛ ] ♨
</h1>

## Stage 02: Project Setup  
**Log:** January 18, 2025  

In this stage, we'll configure the project by modifying key files, installing necessary dependencies, and preparing the app for development.

---

## Step by Step Process

#### Change 1: Update `AndroidManifest.xml`  
👉 [View the `AndroidManifest.xml` code here](./android/app/src/main/AndroidManifest.xml)  

Add the following line to lock the screen orientation to `portrait`:

```xml
<activity
    android:name=".MainActivity"
    android:label="@string/app_name"

    ... add this line->
    android:screenOrientation="portrait" 

```

---

### Step 2: Install Dependencies  

#### 2.1 React Navigation  
Updated documentation: [React Navigation - Getting Started](https://reactnavigation.org/docs/getting-started/)  

Install the core React Navigation package:  
```bash
npm install @react-navigation/native
```

React Navigation uses other libraries like `react-native-screens` and `react-native-safe-area-context`. Install them:  
```bash
npm install react-native-screens react-native-safe-area-context
```

**Note:**  
Warnings related to peer dependencies are common and can be ignored if your app builds successfully.  

For iOS development, install the CocoaPods dependencies:  
```bash
npx pod-install ios
```

#### Android-specific Configuration: ♨ 
In `MainActivity.kt` or `MainActivity.java` (under `android/app/src/main/java/<your package name>/`), add the following code:  

```kotlin
import android.os.Bundle // <-this

class MainActivity: ReactActivity() {

   //this override function
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
    }

}
```

This prevents crashes related to inconsistent View state persistence.

---

#### 2.2 Native Stack Navigator  
Updated documentation: [React Navigation - Native Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator/)  

Install the native stack navigator:  
```bash
npm install @react-navigation/native-stack
```

---

#### 2.3 Bottom Tabs Navigator  
Updated documentation: [React Navigation - Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/)  

Install the bottom tabs navigator:  
```bash
npm install @react-navigation/bottom-tabs
```

---

#### 2.4 Linear Gradient  
Updated documentation: [React Native Linear Gradient](https://www.npmjs.com/package/react-native-linear-gradient)  

Install the linear gradient library:  
```bash
npm i react-native-linear-gradient
```

---

#### 2.5 Blur View  
Updated documentation: [React Native Blur](https://www.npmjs.com/package/@react-native-community/blur)  

Install the blur view library:  
```bash
npm i @react-native-community/blur
```

---

#### 2.6 Lottie Animations  
Updated documentation: [Lottie React Native](https://www.npmjs.com/package/lottie-react-native)  

Install the Lottie animation library:  
```bash
npm i lottie-react-native
```

---

#### 2.7 Vector Icons  
Updated documentation: [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons)  

Install the vector icons library:  
```bash
npm i react-native-vector-icons
```
Also install TypeScript types (for TypeScript projects):  
```bash
npm i --save-dev @types/react-native-vector-icons
```

---

#### 2.8 Zustand (State Management)  
Updated documentation: [Zustand](https://www.npmjs.com/package/zustand)  

Install Zustand for state management:  
```bash
npm i zustand
```

---

#### 2.9 Immer (Immutable State)  
Updated documentation: [Immer](https://www.npmjs.com/package/immer)  

Install Immer for immutable state handling:  
```bash
npm i immer
```

---

#### 2.10 Async Storage  
Updated documentation: [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)  

Install Async Storage:  
```bash
npm i @react-native-async-storage/async-storage
```

To clean and rebuild the project for Android, run:  
```bash
cd android
./gradlew clean
cd ..
npx react-native run-android
```

---

### Screenshot  

<p align="center" >  
<img src="./_archive/screenshots/screenshot-1.png" width=200>
</p>  

---
**See you in the next step for the development process! 🚀** 
 
---

