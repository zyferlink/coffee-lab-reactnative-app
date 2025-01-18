<h1 align="center" >  
CoffeeLab by Nova <br> 
♨ [ ʀᴇᴀᴄᴛ ɴᴀᴛɪᴠᴇ ᴘʀᴏᴊᴇᴄᴛ ] ♨
</h1>

## Stage 01: Initialize Project  
**Log:** January 18, 2025  

This is the first step in setting up your React Native project. In this stage, you'll initialize the project, set up dependencies, and run your app on an Android emulator or physical device.

<br/>

## Step by Step Process

### Step 1: Create a New Application  
If you have previously installed `react-native-cli`, remove it as it may cause issues:

```bash
npm uninstall -g react-native-cli @react-native-community/cli
```

Use the React Native Community CLI to create a new project:

```bash
npx @react-native-community/cli init CoffeeLab --version 0.75.0
```

**Note:**  
If you have issues with iOS, reinstall dependencies by running the following commands:

1. Navigate to the iOS folder:
   ```bash
   cd ios
   ```

2. Install Bundler:
   ```bash
   bundle install
   ```

3. Install iOS dependencies with CocoaPods:
   ```bash
   bundle exec pod install
   ```

#
### Step 2: Start Metro  
Metro is the JavaScript bundler for React Native. Start it by running the following from your project folder:

```bash
npm start
```

**Note:**  
Metro is similar to web bundlers like Vite and webpack but designed for React Native. It uses Babel to transform JSX into JavaScript that can be executed.

#
### Step 3: Run Your Application  
Keep Metro Bundler running in its own terminal. Then, open a new terminal in your project folder and run:

```bash
npm run android
```

Your app should appear in the Android emulator if everything is set up properly.

You can also run the app directly from Android Studio.

#### Running on a Physical Device

1. **Enable Debugging over USB**  
Most Android devices only install apps from Google Play by default. To install your app during development, enable USB Debugging.

   - Go to **Settings → About phone → Software information**, and tap **Build number** seven times to enable **Developer options**.
   - Then, go to **Settings → Developer options** and enable **USB debugging**.

2. **Connect Your Device via USB**  
Plug your Android device into your development machine. Check if the device is connected by running:

```bash
adb devices
```

The output should list your device (either physical or emulator).

3. **Run the App**  
To install and launch the app on your device, run:

```bash
npm run android
```

#
### Step 4: Modify Your App  
Now that your app is running, you can make changes.

1. Open `App.tsx` in your text editor and modify the code.
2. Press **R** twice or open the Dev Menu (Ctrl + M) and select **Reload** to see your changes.

---

<br/>

**Congratulations!**  
You’ve successfully run and modified your first React Native app!
<p align="center" >  
<img src="./_archive/screenshots/screenshot-1.png" width=200>
</p>

#
See you in the next step for the development process! 🚀
#

