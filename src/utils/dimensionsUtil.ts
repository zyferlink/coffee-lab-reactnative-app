import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class DimensionsUtil {
  // Get screen width
  static getScreenWidth(): number {
    return width;
  }

  // Get screen height
  static getScreenHeight(): number {
    return height;
  }

  // Convert px to dp
  static pxToDp(px: number): number {
    return PixelRatio.roundToNearestPixel(px);
  }

  // Convert dp to percentage of screen width
  static widthPercentage(percentage: number): number {
    return (width * percentage) / 100;
  }

  // Convert dp to percentage of screen height
    // usage : heightPercentage(10); // 10% of the screen height
  static heightPercentage(percentage: number): number {
    return (height * percentage) / 100;
  }
}
