type FontVariants = {
    black: string;
    bold: string;
    extraBold: string;
    extraLight: string;
    light: string;
    medium: string;
    regular: string;
    semiBold: string;
    thin: string;
};

interface Fonts {
    poppins: FontVariants;
}

export const fonts: Fonts = {
    poppins: {
        black: 'Poppins-Black',
        bold: 'Poppins-Bold',
        extraBold: 'Poppins-ExtraBold',
        extraLight: 'Poppins-ExtraLight',
        light: 'Poppins-Light',
        medium: 'Poppins-Medium',
        regular: 'Poppins-Regular',
        semiBold: 'Poppins-SemiBold',
        thin: 'Poppins-Thin',
    },
};


//-----------------------------------

interface FontSizes {
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
    size32: number;
}

export const fontSizes: FontSizes = {
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
    size32: 32,
};