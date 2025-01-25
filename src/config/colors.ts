type ColorVariants = {
    red?: string;
    orange?: string;
    black?: string;
    darkGrey?: string;
    grey?: string;
    lightGrey?: string;
    white?: string;
    blackTransparent?: string;
  };
  
  interface Colors {
    primary: ColorVariants;
    secondary: ColorVariants;
  }
  
  export const colors: Colors = {
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
      darkGrey: '#21262E',
      grey: '#252A32',
      lightGrey: '#AEAEAE',
      blackTransparent: 'rgba(0,0,0,0.7)',
    },
  };
  