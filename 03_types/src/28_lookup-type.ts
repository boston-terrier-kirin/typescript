// APIからのレスポンスを定義
type Response = {
  paymentInfo: {
    token: number;
  };
};

// paymentInfoだけを返す、関数があった場合
function getPayment(): Response['paymentInfo'] {
  // Response.paymentInfo.token の型をlookupしてくれる
  return {
    token: 12345,
  };
}

// const payment: {
//   token: number;
// }
const payment = getPayment();

export {};
