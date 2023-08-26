import React, { useEffect, useState } from 'react';
import {
  PlatformPayButton,
  isPlatformPaySupported,
  StripeProvider,
  PlatformPay,
} from '@stripe/stripe-react-native';
import { View } from 'react-native';

export const PaymentScreen = () => {
  return (
    <StripeProvider
      publishableKey={'pk_test_MuCBrTDEpP11nqu1Y7Xpjn7a004QBOdFlh'}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PayAction />
    </StripeProvider>
  );
};

export const PayAction = () => {
  const [isApplePaySupported, setIsApplePaySupported] = useState(false);

  useEffect(() => {
    (async function () {
      setIsApplePaySupported(await isPlatformPaySupported());
    })();
  }, []);

  return (
    <View>
      {isApplePaySupported && (
        <PlatformPayButton
          onPress={console.log}
          borderRadius={4}
          type={PlatformPay.ButtonType.Donate}
          style={{
            width: '30%',
            height: 50,
          }}
        />
      )}
    </View>
  );
};
