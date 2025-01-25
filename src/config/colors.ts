type ColorVariants = {
    red: string;
    orange: string;
    black: string;
    darkGrey: string;
    grey: string;
    lightGrey: string;
    white: string;
    blackTransparent: string;
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
        red: '#E05A5A',
        orange: '#E0925D',
        black: '#15181D',
        darkGrey: '#21262E',
        grey: '#252A32',
        lightGrey: '#AEAEAE',
        white: '#F5F5F5',
        blackTransparent: 'rgba(0,0,0,0.7)',
    },
};