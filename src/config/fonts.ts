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
