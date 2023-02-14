type PaymentInfo = {
  token: number;
};

const getPayment = (): PaymentInfo['token'] => {
  // PaymentInfo.token の型をlookupしてくれる
  return 12345;
};
