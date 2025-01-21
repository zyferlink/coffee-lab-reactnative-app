interface Spacing {
    space2: number;
    space4: number;
    space8: number;
    space10: number;
    space12: number;
    space15: number;
    space16: number;
    space18: number;
    space20: number;
    space24: number;
    space28: number;
    space30: number;
    space32: number;
    space36: number;
  }
  
  export const SPACING: Spacing = {
    space2: 2,
    space4: 4,
    space8: 8,
    space10: 10,
    space12: 12,
    space15: 15,
    space16: 16,
    space18: 18,
    space20: 20,
    space24: 24,
    space28: 28,
    space30: 30,
    space32: 32,
    space36: 36,
  };
  
  interface Color {
    primaryRed: string;
    primaryOrange: string;
    primaryBlack: string;
    primaryDarkGrey: string;
    secondaryDarkGrey: string;
    primaryGrey: string;
    secondaryGrey: string;
    primaryLightGrey: string;
    secondaryLightGrey: string;
    primaryWhite: string;
    primaryBlackTransparent: string;
    secondaryBlackTransparent: string;
  }
  
  export const COLORS: Color = {
    primaryRed: '#DC3535',
    primaryOrange: '#D17842',
    primaryBlack: '#0C0F14',
    primaryDarkGrey: '#141921',
    secondaryDarkGrey: '#21262E',
    primaryGrey: '#252A32',
    secondaryGrey: '#252A32',
    primaryLightGrey: '#52555A',
    secondaryLightGrey: '#AEAEAE',
    primaryWhite: '#FFFFFF',
    primaryBlackTransparent: 'rgba(12,15,20,0.5)',
    secondaryBlackTransparent: 'rgba(0,0,0,0.7)',
  };
  
  interface FontFamily {
    poppinsBlack: string;
    poppinsBold: string;
    poppinsExtraBold: string;
    poppinsExtraLight: string;
    poppinsLight: string;
    poppinsMedium: string;
    poppinsRegular: string;
    poppinsSemiBold: string;
    poppinsThin: string;
  }
  
  export const FONTFAMILY: FontFamily = {
    poppinsBlack: 'Poppins-Black',
    poppinsBold: 'Poppins-Bold',
    poppinsExtraBold: 'Poppins-ExtraBold',
    poppinsExtraLight: 'Poppins-ExtraLight',
    poppinsLight: 'Poppins-Light',
    poppinsMedium: 'Poppins-Medium',
    poppinsRegular: 'Poppins-Regular',
    poppinsSemiBold: 'Poppins-SemiBold',
    poppinsThin: 'Poppins-Thin',
  };
  
  interface FontSize {
    size8: number;
    size10: number;
    size12: number;
    size14: number;
    size16: number;
    size18: number;
    size20: number;
    size24: number;
    size28: number;
    size30: number;
  }
  
  export const FONTSIZE: FontSize = {
    size8: 8,
    size10: 10,
    size12: 12,
    size14: 14,
    size16: 16,
    size18: 18,
    size20: 20,
    size24: 24,
    size28: 28,
    size30: 30,
  };
  
  interface BorderRadius {
    radius4: number;
    radius8: number;
    radius10: number;
    radius15: number;
    radius20: number;
    radius25: number;
  }
  
  export const BORDERRADIUS: BorderRadius = {
    radius4: 4,
    radius8: 8,
    radius10: 10,
    radius15: 15,
    radius20: 20,
    radius25: 25,
  };