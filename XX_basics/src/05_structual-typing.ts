type User = {
  id: string;
};

type Product = {
  id: string;
  name: string;
};

const product: Product = {
  id: 'product-fdsage',
  name: 'iPhone',
};

const sayHello = (user: User) => {
  console.log(user.id);
};

// tsはstructual typingなので、構造があっていれば、問題なし。
// sayHelloのパラメータはuserになっているが、productを渡してもOK。
// product.nameがあっても問題なし。
sayHello(product);
