module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
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
}

