import { images } from "../config/assets";

export const PAYMENT_OPTIONS = [
    {
      name: "Wallet",
      icon: "icon",
      isIcon: true,
    },
    {
      name: "Google Pay",
      icon: images.logoGooglePay,
      isIcon: false,
    },
    {
      name: "Apple Pay",
      icon: images.logoApplePay,
      isIcon: false,
    },
    {
      name: "Amazon Pay",
      icon: images.logoAmazonPay,
      isIcon: false,
    },
  ];