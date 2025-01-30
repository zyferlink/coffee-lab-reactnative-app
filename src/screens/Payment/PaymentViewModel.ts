import { useState } from 'react';
import { useStore } from '../../state/useStore';
import { PAYMENT_METHODS } from '../../config/specialTypes';
import { NAVIGATORS, SCREENS } from '../../config/screenNames';

export const usePaymentViewModel = (navigation: any, route: any) => {
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const addToOrderHistoryFromCart = useStore((state: any) => state.addToOrderHistoryFromCart);

  const [paymentMode, setPaymentMode] = useState(PAYMENT_METHODS.CREDIT_CARD);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const buttonPressHandler = () => {
    setShowSuccessAnimation(true);
    addToOrderHistoryFromCart(paymentMode);
    calculateCartPrice();
    setTimeout(() => {
      setShowSuccessAnimation(false);
      navigation.navigate(NAVIGATORS.TAB, { screen: SCREENS.HISTORY });
    }, 2000);
  };

  return {
    paymentMode,
    setPaymentMode,
    showSuccessAnimation,
    buttonPressHandler,
    amount: route.params.amount,
  };
};

