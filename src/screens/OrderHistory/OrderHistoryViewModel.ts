import { useState } from 'react';
import { useStore } from '../../state/useStore';
import { SCREENS } from '../../config/screenNames';
import { lottieAnimations } from '../../config/assets';

export const useOrderHistoryViewModel = (navigation: any) => {
  const orderHistoryList = useStore((state: any) => state.orderHistoryList);
  const [showAnimation, setShowAnimation] = useState(false);

  const navigationHandler = ({ index, id, type }: any) => {
    navigation.push(SCREENS.DETAIL, { index, id, type });
  };

  const downloadActionHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 1500);
  };

  return {
    orderHistoryList,
    showAnimation,
    navigationHandler,
    downloadActionHandler,
    lottieAnimations,
  };
};
